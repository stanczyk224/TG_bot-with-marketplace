require("dotenv").config({ path: "../.env" });

const { Bot, InlineKeyboard } = require("grammy");
const db = require("./db/db");

const token = process.env.BOT_TOKEN;
const ADMIN_ID = Number(process.env.ADMIN_ID);
const bot = new Bot(token);

function isAdmin(ctx) {
  return ctx.from.id === ADMIN_ID;
}

bot.command("start", (ctx) => {
    const keyboard = new InlineKeyboard()
        .text("🛍 Shop", "open_shop")
        .text("help", "open_help");
    ctx.reply("Welcome to the bot!", {
        reply_markup: keyboard,
    });
});

bot.command("myid", (ctx) => {
  ctx.reply("Your ID: " + ctx.from.id);
});

bot.command("add", (ctx) => {
  if (!isAdmin(ctx)) {
    return ctx.reply("❌ No access");
  }

  const text = ctx.message.text.split(" ").slice(1);

  const name = text[0];
  const price = text[1];

  if (!name || !price) {
    return ctx.reply("Usage: /add name price");
  }

  db.prepare(
    "INSERT INTO products (name, price) VALUES (?, ?)"
  ).run(name, price);

  ctx.reply("✅ Product added");
});

bot.command("help", (ctx) => {
    ctx.reply("/start - start the bot \n/help - help menu");
});

bot.command("myid", (ctx) => {
  ctx.reply("Your ID: " + ctx.from.id);
});

bot.callbackQuery("open_shop", (ctx) => {
  const products = db.prepare("SELECT * FROM products").all();

  const keyboard = new InlineKeyboard();

  for (const p of products) {
    keyboard.text(p.name, `product_${p.id}`).row();
  }

  ctx.answerCallbackQuery();

  ctx.reply("🛍 Choose product:", {
    reply_markup: keyboard,
  });
});

bot.callbackQuery(/product_(\d+)/, (ctx) => {
  const id = ctx.match[1];

  const product = db.prepare(
    "SELECT * FROM products WHERE id = ?"
  ).get(id);

  ctx.answerCallbackQuery();

  ctx.reply(`🛒 ${product.name}\n💰 ${product.price}`);
});

bot.callbackQuery("open_help", (ctx) => {
    ctx.answerCallbackQuery();
    ctx.reply("/start - to restart the bot");
});

bot.catch((err) => {
    console.error("GRAMMY ERROR:", err);
});


bot.start();

console.log("Bot started");
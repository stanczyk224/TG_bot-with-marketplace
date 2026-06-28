const { InlineKeyboard } = require("grammy");
const isAdmin = require("../utils/isAdmin");

module.exports = ({ bot, db }) => {

  bot.command("start", (ctx) => {
    const keyboard = new InlineKeyboard()
      .text("🛍 Shop", "open_shop")
      .text("Help", "open_help");

    const tg_id = ctx.from.id;
    const username = ctx.from.username || "unknown";

    let role = "user";

    if (isAdmin(ctx)) {
      role = "admin";
    }

    db.prepare(`
      INSERT INTO users (tg_id, username, role)
      VALUES (?, ?, ?)
      ON CONFLICT(tg_id) DO UPDATE SET
        username = excluded.username,
        role = excluded.role
    `).run(tg_id, username, role);

    if (role === "admin") {
      ctx.reply("Welcome ADMIN!");
    } else {
      ctx.reply("Welcome to the bot!", {
        reply_markup: keyboard,
      });
    }
  });

};
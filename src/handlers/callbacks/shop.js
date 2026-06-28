const { InlineKeyboard } = require("grammy");

module.exports = ({bot,db}) => {

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
}
module.exports = ({bot,db}) => {
  bot.callbackQuery(/product_(\d+)/, (ctx) => {
    const id = ctx.match[1];

    const product = db.prepare(
      "SELECT * FROM products WHERE id = ?"
    ).get(id);

    ctx.answerCallbackQuery();

    ctx.reply(`🛒 ${product.name}\n💰 ${product.price}`);
  });
}
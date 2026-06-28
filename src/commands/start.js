const { InlineKeyboard } = require("grammy");
module.exports = ({bot}) => {
    bot.command("start", (ctx) => {
        const keyboard = new InlineKeyboard()
        .text("🛍 Shop", "open_shop")
        .text("help", "open_help");
        ctx.reply("Welcome to the bot!", {
            reply_markup: keyboard,
        });
    });
}
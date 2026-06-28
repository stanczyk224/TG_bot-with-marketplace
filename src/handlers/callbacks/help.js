module.exports = ({bot}) => {
    bot.callbackQuery("open_help", (ctx) => {
        ctx.answerCallbackQuery();
        ctx.reply("/start - to restart the bot");
    });
}
module.exports = ({bot}) => {
    bot.command("myid", (ctx) => {
        ctx.reply("Your ID: " + ctx.from.id);
    });
};


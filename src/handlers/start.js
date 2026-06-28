module.exports = (bot) => {
  bot.command("start", (ctx) => {
    ctx.reply("Hello from Neovim + grammY bot");
  });
};
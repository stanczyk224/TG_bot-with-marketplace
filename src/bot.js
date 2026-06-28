const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

module.exports = bot;
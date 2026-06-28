const { Bot } = require("grammy");
const { BOT_TOKEN } = require("./config");

const bot = new Bot(BOT_TOKEN);

module.exports = bot;
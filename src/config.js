const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, "../.env"),
});

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  ADMIN_ID: Number(process.env.ADMIN_ID),
};
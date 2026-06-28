const bot = require("./bot");
const db = require("./database/db");

const { ADMIN_ID } = require("./config");
const createIsAdmin = require("./utils/isAdmin");

const isAdmin = createIsAdmin(ADMIN_ID);

const context = {
  bot,
  db,
  isAdmin,
};

module.exports = context;
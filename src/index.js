const bot = require("./bot");
const db = require("./database/db");

const { ADMIN_ID } = require("./config");
const createIsAdmin = require("./utils/isAdmin");
const isAdmin = createIsAdmin(ADMIN_ID);

const deps = { bot, db, isAdmin };

require("./commands/start")(deps);
require("./commands/admin")(deps);
require("./commands/myId")(deps);

require("./handlers/callbacks/shop")(deps);
require("./handlers/callbacks/products")(deps);
require("./handlers/callbacks/help")(deps);

bot.start();

console.log("Bot started");
const ctx = require("./context");

require("./commands/start")(ctx);
require("./commands/admin")(ctx);
require("./commands/myId")(ctx);

require("./handlers/callbacks/shop")(ctx);
require("./handlers/callbacks/products")(ctx);
require("./handlers/callbacks/help")(ctx);

ctx.bot.start();

console.log("Bot started");
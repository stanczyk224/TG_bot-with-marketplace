module.exports = ({bot, db, isAdmin}) => {
  bot.command("add", (ctx) => {
    if (!isAdmin(ctx)) {
      return ctx.reply("❌ No access");
    }

    const text = ctx.message.text.split(" ").slice(1);

    const name = text[0];
    const price = text[1];

    if (!name || !price) {
      return ctx.reply("Usage: /add name price");
    }

    db.prepare(
      "INSERT INTO products (name, price) VALUES (?, ?)"
    ).run(name, price);

    ctx.reply("✅ Product added");
  });
  bot.command("users", (ctx) => {
    if (!isAdmin(ctx)) {
      return ctx.reply("❌ No access");
    }

    const users = db.prepare(
      `
      SELECT * FROM users
      `
    ).all();
    console.log(users);
  })
};
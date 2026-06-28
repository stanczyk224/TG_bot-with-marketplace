const Database = require("better-sqlite3");

const db = new Database("shop.db");

db.prepare(`
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER
        )
    `).run();

module.exports = db;
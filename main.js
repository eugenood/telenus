const Database = require("./src/database");
const Bot = require("./src/bot");
const Server = require("./src/server")

require("dotenv").config()

const db = new Database("db.json");
const bot = new Bot(process.env.BOT_TOKEN, db);
const server = new Server(process.env.PORT, db);

bot.startPolling();
server.startPolling();

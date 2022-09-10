//Load packages

const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [ 32767 ] });
const colors = require("colors");

//Calling the configuration
const config = require('./config/config');

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[CRASH] Authentication Token for Discord bot is required!".red)
  return process.exit();
};

// Handler:
client.prefix_commands = new Collection();
client.slash_commands = new Collection();
client.user_commands = new Collection();
client.message_commands = new Collection();
client.modals = new Collection();
client.events = new Collection();

module.exports = client;

["prefix", "application_commands", "modals", "events", "mongoose"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[CRASH] Something went wrong while connecting to your bot...");
    console.error("[CRASH] Error from Discord API:" + err);
    return process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Unhandled Rejection: ${err}`.red);
  console.error(promise);
});

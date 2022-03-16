const { token, prefix} = require("./config/main.json");

const Logger = require("./src/util/Logger");
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_BANS,
    ],
    partials: ["CHANNEL"]
});
client.commands = new Discord.Collection();
client.commands.normal = new Discord.Collection();
client.events = new Discord.Collection();
client.commands.normal.aliases = new Discord.Collection();
client.commands.buttons = new Discord.Collection();
client.commands.menus = new Discord.Collection();
client.commands.slash = new Discord.Collection();

Logger.Info("Prendendo il Milk dal frigo...");

// carica gli event listener
const eventFiles = fs.readdirSync('./src/listeners').filter(file => file.endsWith('.js'));
Logger.Info("[LISTENER] Caricando gli event listener...");

for (const file of eventFiles) {
	const event = require(`./src/listeners/${file}`);
    Logger.Success("[LISTENER] Event listener caricato: "+file);
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args));
	} else {
		client.on(event.name, (...args) => event.run(...args));
	}
}

Logger.Info("Dando il Milk a Dani Bot...");
client.login(token);

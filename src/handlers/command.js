// Command Handler
const fs = require("fs");
const Logger = require("../Logger");
const { client } = require("../index");

function handleCommands() {
    console.log("[HANDLERS] Caricando i comandi...");

    const commandFiles = fs.readdirSync(`./src/commands`).filter(file => file.endsWith(".js"));
    for(let file of commandFiles) {
        var command = require(`../commands/${file}`);

        if(command.name) {
            client.commands.set(pull.name, pull);
            Logger.Info("[COMANDI] Comando caricato: "+command.name+" ["+command+"]");
        } else {
            Logger.Error("[ERRORE] Impossibile caricare "+command+"")
            continue;
        }
        if(command.aliases && Array.isArray(command.aliases)) command.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
}

module.exports = {
    handleCommands: handleCommands
}

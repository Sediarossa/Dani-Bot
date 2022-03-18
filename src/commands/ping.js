const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",

    run: async (client, message, args) => {
        message.delete();
        const msg = await message.channel.send("Sto calcolando il ping...");

        msg.edit("Ho calcolato il mio ping...");

        const ping = `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`

        const embedPing = new MessageEmbed()
            .setColor("#ffffff")
            .setTitle("Ping di Dani Bot")
            .setDescription(ping)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
        
        message.channel.send({ embeds: [embedPing] });
    }
}

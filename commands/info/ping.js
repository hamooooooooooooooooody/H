const { EmbedBuilder } = require("discord.js");
const { Utils } = require("devtools-ts");
const utilites = new Utils();

module.exports = {
    name: "ping",
    description: `Test the bots response time.`,
    cooldown: 5000,
    async execute(client, message, args) {
        try {
            if (message.guild.members.me.voice?.channelId && message.member.voice.channelId !== message.guild.members.me?.voice?.channelId) return; 
            if (!message.member.voice.channel) return;    
            message.reply({ content: `:ping_pong: Pong ${client.ws.ping} ms` })
        } catch (err) {
            console.log(err)
        }
    },
};
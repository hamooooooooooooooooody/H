const { EmbedBuilder } = require("discord.js");
const distube = require('../../client/distube')
const { joinVoiceChannel } = require('@discordjs/voice');
const { Utils } = require("devtools-ts");
const utilites = new Utils();
const db = require(`quick.db`)
const config = require("../../config.json")


module.exports = {
    name: "247",
    description: "Toggles the 24/7 mode. This makes the bot doesn't leave the voice channel until you stop it.",
    aliases: ['24/7', '24-7'],
    async execute(client, message, args) {
        try {
            if (message.guild.members.me.voice?.channelId && message.member.voice.channelId !== message.guild.members.me?.voice?.channelId) return; 

            let channel = message.member.voice.channel;
            if (!channel) return;

            distube.voices.join(channel).then(() => {
                if (!db.get(`24_7_${message.guild.id}`)) {
                    db.set(`24_7_${message.guild.id}`, channel.id)
                    message.react(config.true)
                } else {
                    db.delete(`24_7_${message.guild.id}`)
                    message.react(config.false)
                }
            })
        } catch (err) {
            console.log(err) 
        }
    },
};
const config = require("../../config.json")

module.exports = {
	name: "set-stream",
  aliases: ['setstreaming','ststr'],
  execute(client, message, args) {

  let owwneeer = config.owner
    if (!owwneeer.includes(message.author.id)) return;
  
  const kk = args[0]
    if(!kk) return message.channel.send("Activity ?")
    client.user.setActivity(kk,{type : 'PLAYING'})
        message.react(config.true)

  }
}
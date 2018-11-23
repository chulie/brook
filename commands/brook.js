const Discord = require("discord.js");
var moment = require('moment');

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botsChannel = message.guild.channels.find(`name`, "bots-commandes");
    let botembed = new Discord.RichEmbed()
    .setColor("#845AEF")
    .setThumbnail(bicon)
    .setDescription(`Yo ho ho ! Je m'appelle Brook ! Je suis là pour t'aider ~\nMes commandes se trouvent sur #${botsChannel}`)
    .addField(`J'ai été crée le`, moment(bot.user.createdAt).format(`DD/MM/YYYY, à h:mm`), true);

    return message.channel.send(botembed);
}

module.exports.help = {
  name: "brook"
}

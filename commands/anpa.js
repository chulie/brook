const Discord = require("discord.js");
var moment = require('moment');
const status = {
  online: "En mer",
  idle: "Assomé.e",
  dnd: "Occupé.e",
  offline: "Endormi.e"
};

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#845AEF")
    .setThumbnail(sicon)
    .setTitle("Bienvenue sur ANPA !")
    .addField("Crée le", moment(message.member.joinedAt).format(`DD/MM/YYYY, à h:mm`),true)
    .addField("Nous sommes", message.guild.memberCount, true)
    .addField("Connectés", message.guild.members.filter(member => member.presence.status != "Endormi.e").size)
    .addField("Groupes du serveur", message.guild.roles.map(r => r.toString()).join(" "), true);

    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "anpa"
}

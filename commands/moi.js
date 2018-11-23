const Discord = require("discord.js");
const moment = require('moment');
const status = {
  online: "Prêt.e pour la bagarre",
  idle: "Zombifié.e",
  dnd: "Occupé.e",
  offline: "Assomé.e"
};

module.exports.run = async (member, message, args) => {

    let mIcon = message.author.displayAvatarURL;
    let rMember = message.author;
    let mEmbed = new Discord.RichEmbed()
    .setDescription(`**INFOS DE ${rMember}**\n...............................................................................................`)
    .setColor("#845AEF")
    .setThumbnail(mIcon)
    .addField("nakama depuis le",  moment(message.member.joinedAt).format(`DD/MM/YYYY, à h:mm`),true)
    .addField("Team", message.member.roles.map(r => r.toString()).join(" "), true)
    .addField("Actuellement", `${status[message.member.user.presence.status]}`, true)
    .addField("Passe temps", `${message.member.user.presence.game ? `${message.member.user.presence.game.name}` : "Rien à l'horizon"}`, true);

    return message.channel.send(mEmbed);
}

module.exports.help = {
  name: "moi"
}

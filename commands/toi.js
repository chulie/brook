const Discord = require("discord.js");
var moment = require('moment');
const status = {
  online: "En mer",
  idle: "Assomé.e",
  dnd: "Occupé.e",
  offline: "Endormi.e"
};

module.exports.run = async (member, message, args) => {

    let mMember = message.mentions.members.first();
    if (!mMember) return message.channel.send("Yo ho ho tu as mentionné quelqu'un ? Je ne l'ai pas trouvé...");
    let uEmbed = new Discord.RichEmbed()
    .setColor("#845AEF")
    .setThumbnail(`${mMember.user.displayAvatarURL}`)
    .setDescription(`**INFOS DE ${mMember}**\n........................................................................................................`)
    .addField("Nakama depuis le",  moment(mMember.joinedAt).format(`DD/MM/YYYY, à h:mm`),true)
    .addField("Team", mMember.roles.map(r => r.toString()).join(" "), true)
    .addField("Actuellement", `${status[mMember.user.presence.status]}`, true)
    .addField("Passe temps", `${mMember.user.presence.game ? `${mMember.user.presence.game.name}` : "Rien à l'horizon"}`, true);

    return message.channel.send(uEmbed);
}

module.exports.help = {
  name: "toi"
}

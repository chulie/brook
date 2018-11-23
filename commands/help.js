const Discord = require("discord.js");
var moment = require('moment');

module.exports.run = async (bot, member, message, args) => {

  let rMember = message.member;
  let questionChannel = member.guild.channels.find(`name`, "questions");
  let botsChannel = member.guild.channels.find(`name`, "bots-commandes");

  questionChannel.send({
    "content": "",
    embed: {
      description: `**À TON SERVICE !**\nYohoho ! Tu as été dirigé vers le salon des #${questionChannel} au cas où. n'hésite pas à fouiner par un \`CTRL + F\` au cas où.\n
                    S'il est question d'une commande, alors c'est sur #${botsChannel} que je t'envoie.
                    \nFinalement, si tu as besoin d'un admin, je notifie les <@&417038709679063040> pour toi, n'hésite pas à poser tes questions après mon petit message !`,
      color: 8674031
    }
  });
}

module.exports.help = {
  name: "help"
}

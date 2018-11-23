const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let rMember = message.member;
  let role = args.slice(0).join(" ");
  if(!role) return message.reply("Quel est ton groupe ? Yo ho");
  let gRole = message.guild.roles.find((r) => r.name === role);﻿
  if(!gRole) return message.reply("Je n'ai pas trouvé ce groupe... ho ho");

  if(gRole.name ==='bots' || gRole.name === 'brook') return message.channel.send("Yo ho ho seul Franky peut prétendre être un robot");
  if(gRole.name ==='masters') return message.channel.send("Bien tenté, mais tu ne seras pas le capitaine de ce navire yo ho ho !");
  if(message.member.roles.has('513669025914421248')) return message.channel.send("Yo ho ho tu es déjà team pirates. Si tu dois changer de groupe contact un <@&417038709679063040>");
  if(message.member.roles.has('513668584325775370')) return message.channel.send("Yo ho ho tu es déjà team civils. Si tu dois changer de groupe contact un <@&417038709679063040>");
  if(message.member.roles.has('513668868187881482')) return message.channel.send("Yo ho ho tu es déjà team marins. Si tu dois changer de groupe contact un <@&417038709679063040>");

  await(rMember.addRole(gRole.id));
  await message.channel.send(`Yo ho ho <@${rMember.id}>, bienvenue chez les <@&${gRole.id}> !`)

}

module.exports.help = {
  name: "team"
}

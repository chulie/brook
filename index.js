const botconfig = require("./botconfig.json");
// const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    console.log("Je n'ai pas trouvé la commande");
    return;
  }

  jsfile.forEach((f, i) => {

    let props = require(`./commands/${f}`);
    console.log(`${f} ok`);
    bot.commands.set(props.help.name, props);
  });

});

// ce que fait le bot
// bot.on("ready", async () => {
//   console.log(`${bot.user.username} is online!`);
//   bot.user.setActivity("La petite maison dans la prairie", {type: "WATCHING"});
// });

// message de bienvenue
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} a rejoint le discord`);
  let welcomechannel = member.guild.channels.find(`name`, "accueil-départ");
  let questionChannel = member.guild.channels.find(`name`, "questions");
  let annoncesChannel = member.guild.channels.find(`name`, "annonces");
  let botsChannel = member.guild.channels.find(`name`, "bots-commandes");

  welcomechannel.send({
    embed: {
      title: `Yohoho !`,
      description: `@everyone nouvel aventurier à bord! Bienvenue sur ANPA ${member} !\nPour accéder aux autres salons tu dois faire partie d'un groupe: pirates, marins, civils en envoyant le message suivant dans le salon d'accueil: \`\`\`css\n!team tongroupe\n\`\`\`Si tu as besoin d'aide, n'hésite pas à te rendre sur #${questionChannel}.\nSi tu veux savoir ce que je peux faire pour toi, jette un oeil à #${botsChannel}.\nEt enfin, tiens toi au jus en surveillant les #${annoncesChannel} et amuse toi partout sur le discord, Yo ho ho !`,
      color: 8674031
    }
  });
});

//message de départ
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} est parti`);

  let welcomechannel = member.guild.channels.find(`name`, "accueil-départ");
  welcomechannel.send(`Yohoho ${member} a quitté l'aventure, bonne chance à toi !`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  //commande "hello"
  // if (cmd === `${prefix}hello`){
  //   return message.channel.send("Yo ho ho ho! Hello!");
  // }
});

// bot.login(tokenfile.token);
bot.login(process.env.TOKEN)

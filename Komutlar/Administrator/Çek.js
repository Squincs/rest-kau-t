const Discord = require("discord.js");
const ayarlar = require('../../Ayarlamalar/Config.json');
const Config = require('../../Ayarlamalar/Settings.json');

exports.run = async (client, message, args) => {

let onaylama = '860639437880295424' // Onaylama Emoji ID si
let reddetme = '860639474626723891' // Reddetme Emoji ID si

if (!message.member.voice.channel) {
return message.reply(new Discord.MessageEmbed().setDescription("Ses kanalında olman lazım!").setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)).then(m => m.delete,{timeout: 5000});
}
const filter = (reaction, user) => {
return [onaylama, reddetme].includes(reaction.emoji.id) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir Kullanıcı Belirt.').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)).then(m => m.delete,{timeout: 5000});

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription('Etiketlenen kullanıcı ses kanalında değil.').setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)).then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)
.setDescription(`${kullanıcı}, ${message.author} Seni \`${message.member.voice.channel.name}\` Odasına çekmek istiyor. Kabul ediyormusun ?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react(onaylama)
await mesaj.react(reddetme)
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.id === onaylama) {
let kabul = new Discord.MessageEmbed()
.setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)
.setDescription(`${kullanıcı} Odaya çekilme teklifini onayladı!`)
message.channel.send(kabul)
kullanıcı.voice.setChannel(message.member.voice.channel.id)
} else {
let stiprus = new Discord.MessageEmbed()
.setColor(Config.Embed.Color).setFooter(Config.Embed.Footer)
.setDescription(`${kullanıcı} Odaya çekilme teklifini reddetti!`)
message.channel.send(stiprus)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gel"],
  permLevel: 0,
}

exports.help = {
  name: 'çek',
  description: 'Etiketlediğiniz kişiye odaya çekme isteği yollar. / Stans was here',
  usage: 'çek'
}
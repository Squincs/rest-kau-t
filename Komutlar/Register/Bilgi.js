const Discord = require('discord.js');
const ayarlar = require('../../Ayarlamalar/Config.json');
const Config = require('../../Ayarlamalar/Settings.json')
const db = require('quick.db');
const gifler = ['https://cdn.discordapp.com/attachments/856286188164218880/856557709422493716/755244622946631700.gif', 'https://cdn.discordapp.com/attachments/856286188164218880/856557597879566336/755244492801441892.gif', 'https://cdn.discordapp.com/attachments/856286188164218880/856557331126812693/749054660769218631.gif', 'https://cdn.discordapp.com/attachments/856286188164218880/856557307688124456/749053689419006003.gif', 'https://cdn.discordapp.com/attachments/856286188164218880/856557254480232448/749051341325729913.gif']

exports.run = async (client, message, args) => {

let Prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.Bot.Prefix

message.channel.send(new Discord.MessageEmbed()
  .setAuthor('Bilgilendirme Menüsü', message.author.avatarURL({dynamic: true}))
  .setColor(Config.Embed.Color)
  .setDescription(`> **• | Merhaba!** ${message.author} \n> **• | Prefix:** \`${Prefix}\`\n> **• | Ping:** \`${Math.round(client.ws.ping)}\` \n\n > **__Erkek nasıl kayıt edilir?__**\n\n  Erkek kaydı için \`${Prefix}erkek {isim} {yaş}\` yazarak kişiyi kaydedersin. \n\n > **__Kız nasıl kayıt edilir?__**\n\n  Kız kaydı için \`${Prefix}kız {isim} {yaş}\` yazarak kişiyi kaydedersin. \n\n > **__Kayıtsıza geri alma__**\n\n  Kayıtsıza geri almak için \`${Prefix}kayıtsız @kullanıcı\` komutunu kullanabilirsin.\n\n > **__İsim değiştirme__**\n\n Bir kullanıcının ismini değiştirmek için \`${Prefix}isim @kullanıcı {isim} {yaş}\` komutunu kullanabilirsin.`)
  .setImage(Config.Embed.Image)
  .setTimestamp()
  .setThumbnail(gifler[Math.floor(Math.random() * gifler.length)])
  .setFooter(Config.Embed.Footer)
)
message.react(Config.Emojis.Check);
}

exports.conf = {
  aliases: ["bilgi", "i", "information", "istatistik", "kayıt-bilgi", "teyit-bilgi"],
  permLevel: 0,
}

exports.help = {
  name: 'bilgi',
  description: 'Bilgilendirme menüsünü gösterir. / Stans was here',
  usage: 'bilgi'
};
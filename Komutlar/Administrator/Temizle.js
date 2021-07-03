const Discord = require('discord.js');
const Config = require("../../Ayarlamalar/Settings.json");

exports.run = async (client, message, args) => {

let stiprusembed = new Discord.MessageEmbed().setColor(Config.Embed.Color).setFooter(Config.Embed.Footer).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(stiprusembed.setDescription(`**Bu yetkiyi kullanabilmen için \`Yönetici\` Yetkisine sahip olmalısın.**`)).then(x => x.delete({timeout: Config.Embed.Timeout}));
if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(stiprusembed.setDescription(`**1-100 Arasında silinecek bir değer giriniz.**`)).then(m => m.delete({timeout: Config.Embed.Timeout}));
message.channel.bulkDelete(Number(args[0])).then(mesajlar => message.channel.send(stiprusembed.setDescription(`**Başarılı Bir Şekilde \`${mesajlar.size}\` Adet mesaj silindi.**`))).then(m => m.delete({timeout: Config.Embed.Timeout}));

};
exports.conf = {
  aliases: ["sil","temizle"],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesajı siler / Stans was here',
  usage: 'sil'
};
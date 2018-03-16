const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

client.on('ready', () => {
  client.user.setGame(prefix + 'yardım');
  console.log('HAZIRLANDIM');
});

client.on('message', message => {
    if (message.content === 'Sa') {
    	message.reply('**Aleyküm Selamm, sunucumuza hoşgeldin** :ballot_box_with_check: ');
  	}
});
client.on('message', message => {
    if (message.content === 's.a') {
    	message.reply('**Aleyküm Selamm, sunucumuza hoşgeldin** :ballot_box_with_check: ');
  	}
});

client.on('message', message => {
  if (message.content === 'sa') {
    	message.reply('**Aleyküm Selamm, sunucumuza hoşgeldin** :ballot_box_with_check: ');
  	}
});

client.on('message', message => {
    if (message.content === 'selam') {
    	 message.reply('**Aleyküm Selamm, sunucumuza hoşgeldin** :ballot_box_with_check: ');
  	}
});
client.on('message', message => {
    if (message.content === '+örümcek') {
    	message.reply(' Korktunmuuu | https://goo.gl/6PfWfP ');
  	}
});
client.on('message', message => {
    if (message.content === '+yılan') {
    	message.reply(' Korktunmuuu | https://goo.gl/G3DD58 ');
  	}
});

client.on('message', message => {
    if (message.content === '+komutlar') {
    	message.channel.send('**Botun Ana Komutları**"');
      message.channel.send('+temizle = Sohbet Mesajlarını Siler. \n+bilgi = BOT Kendisi Hakkında Bilgi Verir. \n+ping = BOT Gecikme Süresini Söyler. \nw!davet = BOT Davet Linkini Atar. \nw!istatistik = BOT İstatistiklerini Atar.');
  	}
});
client.on('message', message => {
    if (message.content === '+davet') {
    	message.reply('**Davet Linkim Davet Et Hemen Gelirim**<3 | https://goo.gl/9vcQai ');
  	}
});
client.on('message', message => {
  if (message.content.toLowerCase() === '+bilgi') {
    if (message.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(message.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
      message.author.sendMessage('**Bot Yapımcısı**\n\n__! ωøllεχ VΞVØ 🔱#8240__\n\n**Bot Yardımcısı**\n\n__!idrisbadur#9458__');
  }
});
client.on('message', message => {
  if (msg.content.toLowerCase() === '+ping') {
    if (msg.channel.type !== "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':ping_pong: Pong!', 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
      const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField('Ping:', '**' + client.ping + '**') 
    return msg.author.sendEmbed(pingozel);
  }
});

// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

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
      message.channel.send('+temizle = Sohbet Mesajlarını Siler. \n+bilgi = BOT Kendisi Hakkında Bilgi Verir. \n+ping = BOT Gecikme Süresini Söyler. \n+kullanıcıbilgim = Kendiniz Hakkında Bilgi Verir. \n\n**Bot Beta Aşamasındadır**');
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
  if (message.content.toLowerCase() === '+ping') {
    if (message.channel.type !== "dm") {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':ping_pong: Pong!', 'Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
      const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Ping:', '**' + client.ping + '**') 
    return message.author.sendEmbed(pingozel);
  }
});
client.on('message', message => {
  if (message.content.toLowerCase() === '+kullanıcıbilgim')
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Ad:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Kayıt tarihi:', message.author.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', message.author.presence.game ? message.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', message.author.bot ? '\n Evet' : 'Hayır')
      console.log("!kullanıcıbilgim komutu " + message.author.username + " tarafından kullanıldı.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
});

// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

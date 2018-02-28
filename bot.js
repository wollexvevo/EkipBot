const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

client.on('ready', () => {
    console.log('I am ready!');
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

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sunucubilgi') {
    if  (msg.channel.type === 'dm') {
      const ozelmesajuyarii = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(' Uyarı ', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyarii); }
    if (msg.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.guild.name, msg.guild.iconURL)
    .addField('Ad:', msg.guild.name)
    .addField('ID', msg.guild.id)
    .addField('Ana kanal:', msg.guild.defaultChannel)
    .addField('Bölge', msg.guild.region)
    .addField('Üye sayısı:', msg.guild.memberCount)
    .addField('Sahibi:', msg.guild.owner)
    .addField('Kanal sayısı:', msg.guild.channels.size)
    .addField('Oluşturulma tarihi:', msg.guild.createdAt)
    return  msg.channel.sendEmbed(sunucubilgi);
    }
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle') {
    if (msg.channel.type === 'dm') {
      const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyari); }
      if (msg.channel.type !== 'dm') {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (msg.author.id !== ayarlar.yapimci) {
            const mesajlariyonet = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .setTimestamp()
          .setAuthor(msg.author.username, msg.author.avatarURL)
          .addField(':warning: Uyarı :warning:', 'Bu komutu kulllanmak için `Mesajları Yönet` iznine sahip olmalısın.')
          return msg.author.sendEmbed(mesajlariyonet);
      }}
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100); //1000 mesaj gg
      const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', msg.author.username)
    .addField('Sonuç:', `Başarılı`)
    return msg.channel.sendEmbed(sohbetsilindi);
      console.log("Sohbet " + msg.member + " tarafından silindi!");
}}});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'komutlar') {
    if (msg.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(msg.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
      msg.author.sendMessage('`Komutlar:\n\n' + prefix + 'komutlar\n' + prefix + 'temizle\n' + prefix + 'sunucubilgi\n' + prefix + 'davetet\n' + prefix + 'kullanıcıbilgim\n' + prefix + 'ping\n\n`').then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
      msg.author.sendMessage('`Eğlence Komutları\n\n'  'temizle\n' 'sunucubilgi\n'  'davetet\n'  'kullanıcıbilgim\n'  'ping\n`').then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);

  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'davetet') {
    if (msg.channel.type !== 'dm') {
      const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(msg.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(ozelmesajkontrol) }
      msg.author.sendMessage("Link: https://discordapp.com/oauth2/authorize?client_id=418392785322901505&scope=bot&permissions=8").then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'kullanıcıbilgim')
    if (msg.channel.type !== "group") {
        var Durum = msg.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Ad:', msg.author.username + '#' + msg.author.discriminator)
      .addField('ID:', msg.author.id)
      .addField('Kayıt tarihi:', msg.author.createdAt)
      .addField('Durum:', durm)
      .addField('Şu an oynadığı oyun:', msg.author.presence.game ? msg.author.presence.game.name : 'Şu an oyun oynamıyor')
      .addField('BOT mu?', msg.author.bot ? '\n Evet' : 'Hayır')
      console.log("!kullanıcıbilgim komutu " + msg.author.username + " tarafından kullanıldı.")
      return msg.channel.sendEmbed(kullanicibilgimk);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'ping') {
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

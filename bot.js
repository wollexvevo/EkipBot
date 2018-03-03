const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

client.on('ready', () => {
  console.log('HAZIRLANDIM');
});

client.on('message', message => {
    if (message.content === 'Sa') {
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


client.on("message", message => {
    const kufur = ["amk", "aq", "oç", "ağla", "sikerim", ];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("**Küfür etme lan !** :rage:")
        message.delete()
    }
  client.on('message', message => {
    if (message.content === '+komutlar') {
    	message.reply("**Eğlence ve Kullanıcı Komutları 🤠**", `w!banned = Dene ve Gör! \nw!avatarım = Avatarınınızı Gösterir. \nw!herkesebendençay = Herkese Çay Alırsınız. \nw!koş = Koşarsınız.\nw!çayiç = Çay İçersiniz. \nw!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nw!çayaşekerat = Çaya Şeker Atarsınız. \nw!yumruh-at = Yumruk Atarsınız. \nw!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nw!sunucuresmi = BOT Sunucunun Resmini Atar. \nw!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nw!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `);
  	}
});
 
// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

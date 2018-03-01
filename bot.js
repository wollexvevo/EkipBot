const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

client.on("ready", () => {
    client.user.setGame( prefix +"yardım | Wollex Team <3") 
    console.log("Wollex Bot v1.0.0 Sürümü ile Botun Paneli Aktif Hala Geldi")   
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
 client.on('message', msg => {
     if (message.content === prefix + "deneme") {
     message.channel.sendMessage(stripIndents`
**Selam, ben ${client.user.username}!** Şuanda görmekte olduğunuz kısım benim bütün komutlarımı göstermektedir.


**Bilgi Komutları**
\`\`\`fix
${prefix}yardım - Botun bütün komutlarını size gösterir.
${prefix}sunucubilgi - Sunucu hakkkında detaylı bilgi verir.
${prefix}bilgi - Bot hakkında bilgi verir.
${prefix}temizle - Sohbeti temizler.
${prefix}davetet - Botumuzu sunucunuza davet edebilirsiniz.
\`\`\`

**Eğlence Komutları**
\`\`\`fix
${prefix}kurabiye - Size kurabiye verir.
${prefix}yılan - Sizi Korkutur :D
${prefix}örümcek - Sizi Korkutur :D
${prefix}eniyibot - En iyi botu tanıtır.
\`\`\` `)
    }

});


// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

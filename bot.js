const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

bot.on("ready", () => {
    bot.user.setGame( prefix +"yardım | Wollex Team <3") 
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


// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

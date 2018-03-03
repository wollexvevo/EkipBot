const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+')

client.on('ready', () => {
  client.user.setGame("Merhabalar ^^")
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
  });
 client.on('message', message => {
    if (message.content === '+komutlar') {
    	message.reply(' [**+örümcek**] Sizi Korkutur | [**+yılan**] Sizi Korkutur | **Bot Beta Aşamasındadır** | ');
  	}
});
client.on('message', message => {
    if (message.content === '+davet') {
    	message.reply('**Davet Linkim Davet Et Hemen Gelirim**<3 | https://goo.gl/9vcQai ');
  	}
});
 
// AĞLAYIN :D
client.login(process.env.BOT_TOKEN);

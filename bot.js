const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'sa') {
    	message.reply('as');
  	}
});

client.on('message', message => {
      iif (message.content === '!temizle 100') 
        message.channel.bulkDelete(100);
        message.channel.sendMessage("100 adet mesaj silindi!");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

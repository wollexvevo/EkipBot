const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('prefix')

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
    if (msg.content === prefix + "sunucubilgi") {
        msg.channel.sendMessage(`**Tabiki benim aksini düşünme Kral Benim lan ;D** <@${message.author.id}>`)

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "!";
let owner = "355435506554765312"; //

bot.on("ready", () => {
    bot.user.setGame( prefix +"yardım | Wollex Team <3") 
    console.log("Wollex Bot v1.0.0 Sürümü ile Botun Paneli Aktif Hala Geldi")   
});

bot.login("NDE4MzY0MDc0NTE0OTcyNjky.DXgfcA.dEU21hZ1YsxN8YDN1S6LmQSpJ40")

bot.on("message", message => {

    if (message.content.toLowerCase() === "sa") {
        message.reply("**Aleyküm Selam Birader ;]**")
    }

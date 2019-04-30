const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

// Create Discord session
console.log("Creating session...");


client.once("ready", () => {
    console.log("Bot is online! Stop excecution with ctrl+c");
});

client.on("message", (message) => {
    if (message.author.id === config.id) {
        console.log(message.author.username + " tried to write: " + message.content);
        message.delete();
        message.channel.send("You have no permission to talk because you lost from a 6 digit");
    }
});

client.login(config.token);
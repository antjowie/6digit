
var data = {}

// Put args in data
process.argv.forEach((val, num) => {
    const flag = val.split("=");
    if (flag.length == 2) {
        data[flag[0]] = flag[1]
    }
});

// Verify data
console.log(data)
if (!("t" in data)) {
    console.log("ERROR: Specify bot token with t=the-bot-token");
    return;
}
if (!("id" in data)) {
    console.log("ERROR: Speicfy user id with id=the-user-id");
    return;
}

console.log("Creating session...");

// Create Discord session
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Bot is online! Stop excecution with ctrl+c");
});

client.on("message", (message) => {
    if (message.author.id === data["id"]) {
        console.log(message.author.username + " tried to write: " + message.content);
        message.delete();
        message.channel.send("You have no permission to talk because you lost from a 6 digit");
    }
});

client.login(data["t"]);
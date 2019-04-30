const { prefix, token } = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client();

// Create Discord session
console.log("Creating session...");


client.once("ready", () => {
    console.log("Bot is online! Stop excecution with ctrl+c");
});

const cursedUsers = new Set();
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    if (command === "curse") {
        const user = message.mentions.users.first();
        if (cursedUsers.has(user)) {
            message.reply(`uncursed ${user.name}`);
            cursedUsers.delete(user);
        }
        else {
            message.reply(`cursed ${user.name}`);
            cursedUsers.add(user);
        }
    }
    else if (command === "cursed") {
        if (cursedUsers.size === 0) {
            message.reply("no cursed users");
        }
        else {
            message.reply(cursedUsers);
        }
    }
    else {
        message.reply("incorrect command");
    }

});

client.login(token);
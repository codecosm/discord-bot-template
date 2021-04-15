"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const PREFIX = process.env.PREFIX;
module.exports = async (client, commands, message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot)
        return;
    else {
        const command = message.content
            .toString()
            .slice(PREFIX.length)
            .trim()
            .split(" ")
            .shift()
            .toLowerCase();
        if (!commands.has(command))
            return;
        try {
            commands.get(command).execute(message, client);
        }
        catch (error) {
            message.reply(`An error occured: \`\`\`${error}\`\`\` `);
            console.log(error);
        }
    }
};

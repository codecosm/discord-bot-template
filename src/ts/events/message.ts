export {};

// Requirements
import * as Types from "../types";
import Discord from "discord.js";

// Dotenv Configuration: Prefix
require("dotenv").config();
const PREFIX = process.env.PREFIX as string;

// Function
module.exports = async (
	client: Discord.Client,
	commands: Discord.Collection<string, Types.Command>,
	message: Discord.Message
) => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;
	else {
		const command = message.content
			.toString()
			.slice(PREFIX.length)
			.trim()
			.split(" ")
			.shift()!
			.toLowerCase(); // All this does is completely mutilate the message until all that remains is the one keyword after the prefix

		if (!commands.has(command)) return; // and if that keyword does not exist as a key in the commands collection (see index.ts), it therefore is not an existing command

		try {
			commands.get(command)!.execute(message, client); // however if the keyword is key in the commands collection, it uses the execute property of the command with the message and client objects as parameters
		} catch (error) {
			message.reply(`An error occured: \`\`\`${error}\`\`\` `); //! Remove this line if you don't want your bot to output error messages to the user for whatever reason
			console.log(error);
		}
	}
};

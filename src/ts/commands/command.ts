export {};

// Requirements
import Discord from "discord.js";

// Function
module.exports = {
	name: "your_command_name",
	description: "your_command_description",

	async execute(message: Discord.Message, client: Discord.Client) {
		// Write whatever code your bot is supposed to run when this command gets used
	},
};

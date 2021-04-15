// Requirements
import * as Types from "../ts/types";

import Discord from "discord.js";

import fs from "fs";

// Dotenv Configuration: Bot Token
require("dotenv").config();
const TOKEN = process.env.TOKEN as string;

// Discord.js configuration
const client = new Discord.Client();

// Command Handler
let commands: Discord.Collection<
	string,
	Types.Command
> = new Discord.Collection();

const commandFiles = fs
	.readdirSync(`${__dirname}\\commands`)
	.filter((file: string) => file.endsWith(".js"));

for (const file of commandFiles) {
	const command: Types.Command = require(`${__dirname}\\commands\\${file}`);

	commands.set(command.name, command); // For each file in the commands folder, a new entry is added to the commands collection, with the name being the key and the command object being the value

	console.log(`Loaded command '${command.name}'`);
}

// Event Handler
fs.readdir(__dirname + "/events/", (err: any, files: string[]) => {
	if (err) console.log(err);

	files.forEach((file: string) => {
		if (!file.endsWith(".js")) return;

		const evt: Function = require(__dirname + "/events/" + file);

		let evtName = file.split(".")[0];

		console.log(`Loaded event '${evtName}'`);

		client.on(evtName, evt.bind(null, client, commands)); // Basically, when an event happens that has the same identifier as a file in the events folder, that file gets executed as a module
	});
});

// Startup
client.login(TOKEN);

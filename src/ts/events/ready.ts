// Requirements
import Discord from "discord.js";

// Function
module.exports = (client: Discord.Client) => {
	console.log(
		`Successfully logged in as ${client.user!.username}#${
			client.user!.discriminator
		}`
	);

	// Set presence
	function presence() {
		client.user!.setPresence({
			status: "online",
			activity: {
				name: "with Discord",
				type: "PLAYING",
			},
		});
	}

	presence();

	setInterval(presence, 3600000); // Basically, the Discord API just decides to fuck up sometimes and removes the status of the bot, so this just re-sets the status every 60 minutes.
};

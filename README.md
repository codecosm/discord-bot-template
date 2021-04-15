# Discord Bot Template

A simple template repository for a command-based discord bot using the discord.js library, written in TypeScript. Features an event/command handler, full typing and easy setup/configuration.

## Setup

After you have cloned this repository to your desired location, open up a new powershell instance, cd to the main directory of the bot and type `npm install`, then wait until all requirements are installed. Now create a file simply called `.env` in the main directory, then open that file with your favorite text editor,
and write:

```
PREFIX=<your_prefix_here>
TOKEN=<your_token_here>
```

Replace '\<your_prefix_here\>' with the prefix that you want people to use when interacting with the bot and '\<your_token_here\>' with the discord token of your bot account. If you don't know how to set up a discord bot account, follow [this guide.](https://discordjs.guide/preparations/setting-up-a-bot-application.html)

You can add new commands as files in the `./src/ts/commands/` folder. There is an existing template command file, which shows the basic structure of a command file.

To start the bot type `node .` and press enter. Alternatively, if you want the bot to restart with the newest changes everytime you save a file during development, type `npm run dev` to start the bot using nodemon.

While developing the bot, don't forget to run `tsc` in a seperate powershell instance (but still in the main directory of the bot), so that typescript compiles the changes to .js everytime you save. Also, if you add a new directory to the bot, don't forget to add it to the `include`array of the `tsconfig.json` file in the main directory.

## Usage

To invite the bot to your server, copy the ID of your bot account and create an invite using [this website](https://discordapi.com/permissions.html#0). After you invited the bot to your server and added your own commands, users can run these commands by sending a message with the content:

```
<prefix><command name>
```

An example command with the bot prefix being `!` could look like this:

```
!command
```

<h4>I hope this template will help you start a discord bot project faster and more efficiently. Have fun coding! <3</h4>

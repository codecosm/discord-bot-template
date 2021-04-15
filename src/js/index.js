"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const fs_1 = __importDefault(require("fs"));
require("dotenv").config();
const TOKEN = process.env.TOKEN;
const client = new discord_js_1.default.Client();
let commands = new discord_js_1.default.Collection();
const commandFiles = fs_1.default
    .readdirSync(`${__dirname}\\commands`)
    .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`${__dirname}\\commands\\${file}`);
    commands.set(command.name, command);
    console.log(`Loaded command '${command.name}'`);
}
fs_1.default.readdir(__dirname + "/events/", (err, files) => {
    if (err)
        console.log(err);
    files.forEach((file) => {
        if (!file.endsWith(".js"))
            return;
        const evt = require(__dirname + "/events/" + file);
        let evtName = file.split(".")[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client, commands));
    });
});
client.login(TOKEN);

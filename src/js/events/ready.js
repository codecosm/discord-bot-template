"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (client) => {
    console.log(`Successfully logged in as ${client.user.username}#${client.user.discriminator}`);
    function presence() {
        client.user.setPresence({
            status: "online",
            activity: {
                name: "with Discord",
                type: "PLAYING",
            },
        });
    }
    presence();
    setInterval(presence, 3600000);
};

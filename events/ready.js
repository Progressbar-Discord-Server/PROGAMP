const { ActivityType } = require('discord.js');

module.exports = async (client) => {
    console.log(`Logged to the client ${client.user.username}\n-> Ready on ${client.guilds.cache.size} servers for a total of ${client.users.cache.size} users`);
    client.user.setActivity(client.config.app.listening, { type: ActivityType.Listening });
};
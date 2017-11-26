// © Copyright 2017 Konstantin Kraynov
// Contacts: <konstatin.kraynov@yandex.ru> <https://github.com/evost>
// All rights reserved

const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '!';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the guild, ${member}`);
});

bot.login(Buffer.from('TXpnME16YzJNemcxTXpRd05EUXdOVGMyLkRQeUhsdy55dGxYYklzeEJrUjYwUHg5VXo3cTJZQVd1RG8=', 'base64').toString());

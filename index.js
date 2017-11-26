// © Copyright 2017 Konstantin Kraynov
// Contacts: <konstatin.kraynov@yandex.ru> <https://github.com/evost>
// All rights reserved

const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = '!';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
    if(message.content.startsWith(prefix) && !(message.author === bot.user)) {
        if(message.content === prefix + 'help') {
            message.channel.sendMessage('Not now, pls.');
            return;
        }
        if (message.content === prefix + 'ava') {
            message.channel.sendMessage(message.author.avatarURL);
            return;
        }
        if (message.content === prefix + 'ping') {
            message.reply('Pong!');
            return;
        }
        if (message.content === prefix + 'info') {
            message.channel.sendMessage('```js\n[1] guilt = ' + message.guild.name + '\n[2] channel = ' + message.channel.name + '\n```');
            return;
        }
        message.channel.sendMessage('Unknown command!');
    }
});

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the guild, ${member}`);
});

bot.login(Buffer.from('TXpnME16YzJNemcxTXpRd05EUXdOVGMyLkRQeUhsdy55dGxYYklzeEJrUjYwUHg5VXo3cTJZQVd1RG8=', 'base64').toString());

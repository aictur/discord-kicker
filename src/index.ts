import Discord from 'discord.js';
const config = require('../config.json')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg: Discord.Message) => {

    if (msg.content.startsWith('!')) {
        
        const withoutPrefix : string = msg.content.slice(1);
        const split : Array<string> = withoutPrefix.split(/ +/);
        const command : string = split[0];
        const args : Array<string> = split.slice(1);
    
        if (command === 'castigar') {
            msg.mentions.members.each(user => user.voice.kick())
        }
    }

});

client.login(config.token);
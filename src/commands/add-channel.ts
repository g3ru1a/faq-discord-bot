import { DiscordAPIError } from 'discord.js';
import {Message} from 'discord.js';
import Config from '../utils/Config';

export default {
    name: 'addchannel',
    execute: async (message: Message, args: string[]) => {
        let channels = message.mentions.channels;
        if(channels.array().length === 0) return message.reply('You need to mention at least one text channel.');
        let guildID = message.guild.id;
        let channelIDs: string[] = [];
        channels.array().forEach(c => {
            channelIDs.push(c.id);
        });
        Config.addChannels(guildID, channelIDs).then(() => message.react("✅"));
    }
}
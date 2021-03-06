import { MessageEmbed, Message } from 'discord.js';

export default {
    name: 'help',
    execute: async (message: Message, prefix: string) => {
        let emb: MessageEmbed = new MessageEmbed()
            .setColor('#ff0099')
            .setTitle("FAQ Help");

        addCommand(emb, prefix, 'prefix', 'Changes the command prefix');
        addCommand(emb, prefix, 'faq create [Response]', 'Creates a new FAQ');
        addCommand(emb, prefix, 'faq attach [FAQ ID] [Question]', 'Adds a question to a FAQ');
        addCommand(emb, prefix, 'faq remove-question/rq [Question ID]', 'Removes question from a FAQ');
        addCommand(emb, prefix, 'faq shortcut [FAQ ID] [Word]', 'Adds a shortcut to a FAQ');
        addCommand(emb, prefix, 'faq remove-shortcut/rs [Shortcut ID]', 'Removes shortcut from a FAQ');
        addCommand(emb, prefix, 'faq update [FAQ ID] [Response]', 'Updates the response to a FAQ');
        addCommand(emb, prefix, 'faq remove/rem [FAQ ID]', 'Removes a FAQ');
        addCommand(emb, prefix, 'faq list', 'Lists all FAQs', true);
        addCommand(emb, prefix, 'faqs', 'Lists all FAQs', true);
        addCommand(emb, prefix, 'faq info [FAQ ID]', 'Lists all questions of a FAQ');
        addCommand(emb, prefix, 'ch/channel add [#oneOrMoreChannels]', 'Adds channels where the bot will look for FAQs');
        addCommand(emb, prefix, 'ch/channel rem [#oneOrMoreChannels]', 'Removes channels where the bot will look for FAQs');  
        addCommand(emb, prefix, 'ch/channel list', 'Lists the channels where the bot will look for FAQs');  

        message.channel.send(emb);

        function addCommand(emb: MessageEmbed, prefix: string, command: string,
            description: string, inline: boolean = false) {
            emb.addField(`\`${prefix}${command}\``, `${description}`, inline);
        }
    }
}
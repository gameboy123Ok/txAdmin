//Requires
const modulename = 'DiscordBot:cmd:help';
const { MessageEmbed } = require("discord.js");
const { dir, log, logOk, logWarn, logError } = require('../../../extras/console')(modulename);

module.exports = {
    description: 'Prints a list of commands',
    async execute(message, args) {

        //Prepare description
        let cmdDescs = [];
        globals.discordBot.commands.each((cmd, name) => {
            cmdDescs.push(`${globals.discordBot.config.prefix}${name}: ${cmd.description}`);
        });
        const descLines = [
            `:game_die: **Available commands:**`,
            '```',
            ...cmdDescs,
            '```',
        ];
        const outMsg = new MessageEmbed({
            color: 0x4287F5,
            description: descLines.join('\n')
        });
        return await message.channel.send(outMsg);
    },
};
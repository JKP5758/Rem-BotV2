const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tes')
        .setDescription('Menjawab dengan Halo!'),

    async execute(interaction) {
        await interaction.reply('Halo!');
    }
}


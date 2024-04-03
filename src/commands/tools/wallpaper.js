const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wallpaper')
        .setDescription('Send a random wallpaper.'),
    async execute(interaction, client) {
        try {
            const directory = './wallpapers'; // Direktori tempat gambar-gambar disimpan
            const files = fs.readdirSync(directory).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
            if (files.length === 0) {
                throw new Error('No images found in the directory.');
            }
            const randomFile = files[Math.floor(Math.random() * files.length)];

            await interaction.reply({
                content: 'Here is your random wallpaper:',
                files: [`${directory}/${randomFile}`]
            });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'Sorry, something went wrong while sending the wallpaper.',
                ephemeral: true // Mengirim pesan secara pribadi hanya untuk pengguna yang meminta perintah
            });
        }
    }
}

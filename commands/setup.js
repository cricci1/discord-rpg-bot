const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('Sets up character'),
	async execute(interaction) {

        return interaction.reply({content: 'Works!', ephemeral: true });

	},
};




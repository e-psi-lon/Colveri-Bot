const Discord = require("discord.js")

module.exports = async (colveri, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = require(`../Commands/${interaction.commandName}`)
        command.run(colveri, interaction, command.options)
    }
}
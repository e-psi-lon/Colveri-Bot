const Discord = require("discord.js")
const { SlashCommandBuilder, userMention } = require('discord.js');

module.exports = {

    name: "help",
    description: "Afficher la liste des commandes",
    permission: "Aucune",
    dm: true,
    

    async run(colveri, message, args) {
        console.log("Actionnement de la commande /help ...")
        const embed = new Discord.EmbedBuilder()
        .setTitle('Commandes Du Bot :')
        .setColor('#f5f5dc')
        //.setThumbnail('')
        .setDescription("**Voici la liste des commandes :**")
        .setFooter({ text: 'Colveri Bot', iconURL: message.member.avatarURL({ dynamic: true })})
        .setTimestamp();

        message.reply({ embeds: [embed], ephemeral:true });
        console.log("La commande /help a été actionnée avec succès !")
    }
}
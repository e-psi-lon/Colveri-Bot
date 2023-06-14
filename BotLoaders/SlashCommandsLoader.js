// Flemme.
const Discord = require('discord.js')
const { Routes } = require("discord.js")
const { REST } = require("@discordjs/rest")

 module.exports = async colveri => {
    let commands = [];
    colveri.commands.forEach(async command => {

    let slashcommands = new Discord.SlashCommandBuilder()
    .setName(command.name)
    .setDescription(command.description)
    .setDMPermission(command.dm)
    .setDefaultMemberPermissions(command.permission === "Aucune" ? null: command.permission) 
   
   if(command.options?.length >= 1)  {
    for (let i = 0; i < command.options.length; i++) {
        slashcommands[`add${command.options[i].type.slice(0, 1).toUpperCase() + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required))
        console.log("L'option de commande : " + command.options[i].type + " a été initialisée.")
    }
 } 
 await commands.push(slashcommands)

 })
 const rest = new REST({version: "10"}).setToken(colveri.token)

 await rest.put(Routes.applicationCommands(colveri.user.id), {body: commands})
 console.log("Les commandes ont été créées avec succès !")
};

const Discord = require("discord.js")
const { Client, GatewayIntentBits, ActivityType } = require("discord.js")

const colveri = new Client({intents: []})

module.exports = async colveri => {
   console.log(`Initialisation de ${colveri.user.tag} en cours...`)
   colveri.user.setActivity(`être avec ${colveri.user.cache.size} membres 🤖!`, { type: ActityType.Streaming});
   console.log(`Le bot ${colveri.user.tag} est en ligne!`)
}
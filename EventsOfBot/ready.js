// Les modules dont le bot a besoin.
const Discord = require("discord.js")
const { Client, GatewayIntentBits } = require('discord.js')
const { ActivityType } = require('discord.js');

// Le fichier dont le bot a besoin.
const SlashCommandsLoader = require("../BotLoaders/SlashCommandsLoader")

// Les intents du bot.
const colveri = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
})

// Le programme qui est lancé au démarrage.
module.exports = async colveri => {
    console.log(`Initialisation du bot ${colveri.user.tag} en cours...`)
    await SlashCommandsLoader(colveri)
    colveri.user.setActivity(`surveiller ${colveri.users.cache.size} membres 🤖 !`, { type: ActivityType.Streaming});
    console.log(`Le bot ${colveri.user.tag} est en ligne !`)
}
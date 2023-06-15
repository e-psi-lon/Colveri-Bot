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
  async def on_member_join(member):
   let channel = bot.get_channel(1116373646924075053)
   await channel.send(f"Bienvenue à {member} sur le serveur Colveri's World!")
}
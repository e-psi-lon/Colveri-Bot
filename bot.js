// Les modules dont le bot a besoin.
const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js')
const Discord = require("discord.js");
const { ActivityType } = require('discord.js');

// Les fichiers dont le bot a besoin.
const CommandLoader = require("./BotLoaders/CommandsLoader")
const EventLoader = require("./BotLoaders/EventsLoader")
const JoinEvent = require("./JoinSystem/SomeoneJoin")
const LeaveEvent = require("./JoinSystem/SomeoneLeave")

// Initialiser le programme et les intents du bot
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

// Lancer le loader des commandes et des events.
colveri.commands = new Discord.Collection()
CommandLoader(colveri)
EventLoader(colveri)
JoinEvent(colveri)
LeaveEvent(colveri)


// Faire la liaison entre le programme et le compte Discord du bot.
colveri.login("MTExODY0MTM0NDMyODUwMzQyNw.GdJrvX.RmpARRN_ak7cGBASwfPN_etOyXFFUxcaC0V3EU");
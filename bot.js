// Pourquoi j'ai fais le bot avec le Bloc Notes !

// Les modules dont le bot a besoin.
const Discord = require("discord.js");
const { Client, GatewayIntentBits, SlashCommandBuilder } = require("discord.js")

// Les fichiers dont le bot a besoin.
const LoaderForCommands = require("./BotLoaders/Commands")
const LoaderForEvents = require("./BotLoaders/Events")


// Initialiser le programme et les intents du bot.
const colveri = new Client({intents: []})

// Lancer le loader des commandes et des events.
colveri.commands = new Discord.Collection()
LoaderForCommands(colveri)
LoaderForEvents(colveri)

// Faire la liaison entre le programme et le compte Discord du bot.
colveri.login("MTExODY0MTM0NDMyODUwMzQyNw.GdJrvX.RmpARRN_ak7cGBASwfPN_etOyXFFUxcaC0V3EU");

// Logs en cas de bugs.
process.on('uncaughtException', err => console.error(err.stack));
process.on('unhandledRejection', err => console.error(err.stack));
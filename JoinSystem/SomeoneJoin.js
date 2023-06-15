// Le module dont le bot a besoin.
const loader = require('fs');

// Programme d'initialisation des commandes.
module.exports = async colveri => {
console.log("Le système envoyant un message quand un membre rejoins le serveur est initialisée avec succès!")
 colveri.on('guildMemberAdd', async member => {
   const channel = await colveri.channels.fetch('1116373646924075053');
   console.log(`Le membre ${member} a rejoins le serveur avec succès!`)
   await channel.send(`Bienvenue à ${member} sur le serveur Colveri's World!`)
})}
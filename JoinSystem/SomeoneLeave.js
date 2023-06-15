// Le module dont le bot a besoin.
const loader = require('fs');

// Système de leave.
module.exports = async colveri => {
console.log("Le système envoyant un message quand un membre quitte le serveur est initialisée avec succès!")
 colveri.on('guildMemberRemove', async member => {
   const channel = await colveri.channels.fetch('1116373646924075053');
   console.log(`Le membre ${member.id} a quitté le serveur.`)
   await channel.send(`${member} vient de quitter le serveur. Tu nous manqueras!`)
})}

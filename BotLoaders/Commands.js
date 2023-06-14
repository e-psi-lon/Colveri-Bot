const fs = require('fs')

module.exports = async colveri => {

 const c = colveri;
 fs.readdirSync("./Commands").filter( f => f.endsWith('.js')).forEach(async fichier => {

    const command = require(`../Commands/${fichier}`)

    if (!command.name) throw new TypeError(`Erreur durant l'initialisation de la commande ${file.slice} n'a pas un nom valide!`)
    c.commands.set(command.name, command)
    console.log(`La commande ${file} a été initialisée avec succès!`)

  })
}
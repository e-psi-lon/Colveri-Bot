// Le module dont le bot a besoin.
const loader = require('fs');

// Programme d'initialisation des commandes.
module.exports = async colveri => {

    // Passage du code pour savoir si un fichier est une commande ou non.
    const c = colveri;
    loader.readdirSync("./Commands").filter(f => f.endsWith('.js')).forEach(async file => {

        // Intialisation des commandes et vérif pour savoir si les fichiers sont bons.
        const command = require(`../Commands/${file}`)
        if (!command.name || typeof command.name !== "string") throw new TypeError(`Erreur : La commande ${file.slice(0, file.length - 3)} n'est pas valide !`)
        c.commands.set(command.name, command)
        console.log(`La commande ${file} a bien été initialisée !`)
    })
}
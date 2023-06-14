// Le module dont le bot a besoin.
const fs = require('fs');

// Programme d'initialisation des events.
module.exports = async colveri => {
     
    // Passage du code pour savoir si un fichier est un event ou non.
    fs.readdirSync("./EventsOfBot").filter(f => f.endsWith('.js')).forEach(async file => {

        // Intialisation des events.
        const event = require(`../EventsOfBot/${file}`)
        colveri.on(file.split(".js").join(""), event.bind(null, colveri))
        console.log(`L'event ${file} a bien été initialisée !`)
    })
}
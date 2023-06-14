const fs = require('fs');

module.exports = async colveri => {
 
 const c = colveri;
 fs.readdirSync("./EventsOfBot").filter(f => f.endsWith('.js')).forEach(async fichier => {

    const events = require(`../EventsOfBot/${fichier}`)


    colveri.on(fichier.split("js").join(""), events.bind(null,colveri))
    console.log(`L'event ${fichier} a été initialisée avec succès!`)

  })
}
 
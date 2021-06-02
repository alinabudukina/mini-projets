const http = require("http");
// importer le module fs
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;


let indexFile;
// contient le contenu du fichier HTML

//Nous voulons que notre fichier HTML soit lu lorsqu'un utilisateur sollicite notre système
const requestListener = function (req,res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};
// fs.readFile(__dirname + "/index.html")
// Nous utilisons la méthode fs.readFile() pour charger le fichier
// .then(contents => {
// Nous définissons d'abord l'en-tête Content-Type sur text/html pour indiquer au client que nous renvoyons les données HTML.
//             res.setHeader("Content-Type", "text/html");
// Nous écrivons ensuite le code d'état pour indiquer que la demande a abouti.
//             res.writeHead(200);
//             res.end(contents);
//         })
// Si la promesse fs.readFile() se résout avec succès, elle renverra ses données. Nous utilisons la méthode then() pour traiter ce cas. Le paramètre contents contient les données du fichier HTML.
// La méthode fs.readFile() peut parfois échouer, c'est pourquoi nous devons gérer ce cas lorsque nous obtenons une erreur.
// Lorsqu'une promesse rencontre une erreur, elle est rejetée. Nous traiterons ce cas avec la méthode catch(). 
.catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

const server = http.createServer(requestListener);
fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
// server.listen(port, host, () => {
// console.log(`Server is running on http://${host}:${port}`);
// });




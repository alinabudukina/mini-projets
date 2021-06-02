const http = require("http");
//La valeur localhost est une adresse privée spéciale que les ordinateurs utilisent pour se désigner eux-mêmes
const host = "localhost";
// Le port est un numéro que les serveurs utilisent comme point d'accès ou “porte” à notre adresse IP.
const port = 8000;

// Cette fonction doit avoir deux arguments, un objet de requête et un objet de réponse. L'objet de requête capture toutes les données de la requête HTTP entrante. L'objet de réponse est utilisé pour renvoyer des réponses HTTP au serveur.

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};
// La première ligne définit le code d'état HTTP de la réponse. Les codes d'état HTTP indiquent comment une requête HTTP a été traitée par le serveur.

//À la première ligne, nous créons un nouvel objet server via la fonction createServer() du module http. Ce serveur accepte les requêtes HTTP et les renvoie à notre fonction requestListener().
const server = http.createServer(requestListener);
//Après avoir créé notre serveur, nous devons le lier à une adresse réseau.
// Elle accepte trois arguments : le port, host et une fonction de rappel qui se déclenche lorsque le serveur commence à écouter.
// La fonction de rappel enregistre un message sur notre console afin que nous puissions savoir quand le serveur a commencé à écouter les connexions.
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}/`);
});

//Décomposons ce qui s'est passé lorsque nous avons testé notre serveur. En utilisant cURL, nous avons envoyé une requête GET au serveur sur http://localhost:8000. Notre serveur Node.js a écouté les connexions à partir de cette adresse.  Le serveur a transmis cette requête à la fonction requestListener(). Cette fonction a renvoyé des données textuelles avec le code d'état 200. Le serveur a alors renvoyé cette réponse à cURL, qui a affiché le message dans notre terminal.

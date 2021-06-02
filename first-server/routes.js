// const http = require("http");

// constr host = 'localhost';
// const port = 8000;

// On stock nos données JSON dans des variables
const books = JSON.stringify([
  // La méthode convertit une valeur JavaScript en chaîne JSON
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Prophet", author: "Kahlil Gibran", year: 1923 },
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 },
]);

const requestListener = function (req, res) {
  // Nos réponses vont renvoyer les données dessus
  // На практике эта функция вызывается, когда кто-то открывает ваш сайт в своем браузере (т. е. выдает запрос GET http)

  //nous allons nous assurer que chaque réponse de notre serveur a l'en-tête Content-Type correct
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/books":
      res.writeHead(200);
      res.end(books);
      break;
    case "/authors":
      res.writeHead(200);
      res.end(authors);
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

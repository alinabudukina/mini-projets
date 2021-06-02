// pour retourner une réponse JSON dans le serveur

const http = require("http");
const host = "localhost";
const port = 8000;

//pour etourner le contenu JSON à l'utilisateur (dans le navigateur)
const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

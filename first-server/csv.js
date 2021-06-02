const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  //Cette fois, notre Content-Type indique qu'un fichier CSV est renvoyé car la valeur est text/csv
  res.setHeader("Content-Type", "text/csv");
  //Cet en-tête indique au navigateur comment afficher les données, en particulier dans le navigateur ou en tan
  res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
  //reponse HTTP
  res.writeHead(200);
  res.end(`id,name,email\n1,Sammy Shark,shark@ocean.com`);
  //une chaîne de caractères qui est un CSV valide. La virgule sépare la valeur dans chaque colonne et le nouveau caractère de ligne (\n) sépare les lignes. Nous avons deux lignes, l'une pour l'en-tête de la table et l'autre pour les données.
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

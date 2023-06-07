"use strict";
// les ; ne sont plus obligatoires sur node js

// console.log("Nous allons créer notre propre serveur!");



// Import des librairies
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const portService = require("./src/service/port");
// const APP_ENV = require('./config/environment');
const environment = require('./config/environment');

// console.log(environment.APP_ENV);



// Paramètres de l'application
const app = express();
// const port = 3000;
// const port = portService()
const port = environment.APP_ENV !== 'dev' ? portService() : 3000

// let templateDir = __dirname + "/templates/";
// let templateDirSF = __dirname + "../../Symfony/bibliotheque/templates";
// let templateDirSF_GOOD = path.join(
//   __dirname,
//   "../../",
//   "Symfony/bibliotheque/templates"
// );
// console.log(templateDir);
// console.log(templateDirSF);
// console.log(templateDirSF_GOOD);



// Define the "views" directory
app.set("views", path.join(__dirname, "templates"));



// Define the html engine
app.set("view engine", "html");
app.engine("html", ejs.__express);



// Add the access to the "public" directory
app.use( express.static( path.join(__dirname, "public") ) );
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));



// Routes de l'application
// app.get('/', (req, res) => {
//     res.send('Hello World!') // Comme document.write
// })
// app.get("/", (request, response) => {
//   response.render("pages/homepage/index");
// });
// app.get("/short-forecast", (request, response) => {
//   response.render("pages/forecast/short");
// });
// app.get("/long-forecast", (request, response) => {
//   response.render("pages/forecast/long");
// });

app.use(require('./src/controller/Homepage'))
app.use(require('./src/controller/Forecast'))


// Démarrage du serveur
app.listen(port, () => {
  console.log(`example app listening on http://localhost:${port}`);
});

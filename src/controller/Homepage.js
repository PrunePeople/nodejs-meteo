"use strict";

const express = require("express");
const router = express.Router();

// Définir les controlleurs par les routes
// Route pour la page d'accueil "/"
router.get("/", (request, response) => {
  // Définir une variable color avec la valeur "Red"
  let color = "Red";

  // Définir un tableau de fruits
  let fruits = [
    'Pommes',
    'Poires',
    'Bananes',
  ];

  // Définir un objet utilisateur avec les propriétés firstname et lastname
  let user = {
    firstname: "John",
    lastname: "DOE"
  };

  // Rendre le fichier de vue "pages/homepage/index" en passant les variables color, fruits et user
  response.render("pages/homepage/index", {
    color: color,
    fruits: fruits,
    user: user,
  });
});

// Exporter le routeur
module.exports = router;

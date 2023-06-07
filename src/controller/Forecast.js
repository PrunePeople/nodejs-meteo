"use strict";

const express = require("express");
const router = express.Router();

// Route GET pour "/short-forecast"
router.get("/short-forecast", (request, response) => {
  // Rendre la vue "pages/forecast/short"
  response.render("pages/forecast/short");
});

// Route GET pour "/long-forecast"
router.get("/long-forecast", (request, response) => {
  // Rendre la vue "pages/forecast/long"
  response.render("pages/forecast/long");
});

// Exporter le routeur
module.exports = router;

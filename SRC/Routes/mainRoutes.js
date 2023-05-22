"use strict";

const path = require("path");
const express = require("express");

const mainRouter = express.Router();

// Route for the Home Page
mainRouter.get("/home", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "Views", "home.html"));
});

module.exports = mainRouter;

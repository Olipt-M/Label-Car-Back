const express = require("express");
const server = express();
const mongoose = require("mongoose");

const routes = require("./routes");

server.use(express.json());

server.listen(5500, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/label_car");

  const db = mongoose.connection;
  db.once("open", () => console.log("Connexion au serveur mongoDB et à la base label_car OK !"))
    .on("error", error => console.error("Problème pendant la connexion à la base de données", error));
});

routes(server);
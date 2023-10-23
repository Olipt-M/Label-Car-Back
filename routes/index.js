const CarController = require("../controllers/car");

module.exports = server => {
  server.get("/", (req, res) => {
    res.send("Page d'accueil de l'API Cars");
  });

  server.get("/cars", (req, res) => {
    CarController.getAll(req, res);
  });

  server.get("/cars/:id", (req, res) => {
    CarController.get(req, res);
  });

  server.post("/cars", (req, res) => {
    CarController.create(req, res);
  });

  server.delete("/cars/:id", (req, res) => {
    CarController.delete(req, res);
  });

  server.put("/cars", (req, res) => {
    CarController.update(req, res);
  })
}
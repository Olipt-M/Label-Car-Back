const CarModel = require("../models/car");

module.exports = {
  getAll(req, res) {
    CarModel.find().then(cars => {
      res.send(cars);
    });
  },

  get(req, res) {
    const id = req.params.id;

    CarModel.findById(id).then(car => {
      res.send(car);
    });
  },

  create(req, res) {
    const car = new CarModel({...req.body});

    car.save().then(() => {
      res.send({
        response: `Voiture ${car.name} créée avec succès.`
      });
    });
  },

  delete(req, res) {
    const id = req.params.id;

    CarModel.findByIdAndRemove(id).then(car => {
      res.send({
        response: `Voiture ${car.name} supprimée avec succès.`
      });
    });
  },

  update(req, res) {
    const id = req.body._id;

    if (id) {
      CarModel.findByIdAndUpdate(id, req.body).then((car) => {
        res.send({
          response: `Voiture ${car.name} mise à jour avec succès.`
        });
      })
    } else {
      res.send({
        response: "Un ID est nécessaire."
      });
    }
  }
}
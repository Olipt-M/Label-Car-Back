const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: String,
  options: {
    aircondition: Boolean,
    navigation: Boolean,
    transmission: String,
    person: Number
  },
  image: String,
  price: Number,
  reservations: Number
});

module.exports = mongoose.model("car", CarSchema);
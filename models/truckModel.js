const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const truckSchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

const Truck = model("Truck", truckSchema);
module.exports = Truck;
const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const shipOwnerSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
    description: { type: String },
    nationality: { type: String },
  },
  { timestamps: true }
);

const ShipOwner = model("ShipOwner", shipOwnerSchema);
module.exports = ShipOwner;

const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const quayTypeSchema = new Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const QuayType = model("QuayType", quayTypeSchema);
module.exports = QuayType;

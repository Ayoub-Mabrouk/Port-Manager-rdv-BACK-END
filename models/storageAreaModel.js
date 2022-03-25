const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const storageAreaSchema = new Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);
const StorageArea = model("StorageArea", storageAreaSchema);
module.exports = StorageArea;
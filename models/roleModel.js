const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const roleSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Role = model("Role", roleSchema);
module.exports = Role;

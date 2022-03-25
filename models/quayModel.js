const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const quaySchema = new Schema(
  {
    idQuayType: {
        type: Schema.Types.ObjectId,
        ref: "QuayType"
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Quay = model("Quay", quaySchema);
module.exports = Quay;

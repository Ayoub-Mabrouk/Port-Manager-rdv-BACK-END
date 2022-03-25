const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const customFeeSchema = new Schema(
  {
    idCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    amount: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const CustomFee = model("CustomFee", customFeeSchema);
module.exports = CustomFee;

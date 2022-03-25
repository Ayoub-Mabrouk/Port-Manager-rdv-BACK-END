const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const blockPartSchema = new Schema(
  {
    x_index: { type: String },
    y_index: { type: String },
    z_index: { type: String },
    idBlock: {
      type: Schema.Types.ObjectId,
      ref: "Block",
    },
    idContainer: {
      type: Schema.Types.ObjectId,
      ref: "Container",
    },
  },
  { timestamps: true }
);

const BlockPart = model("BlockPart", blockPartSchema);
module.exports = BlockPart;

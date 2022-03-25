const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const categorySchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
    },
    { timestamps: true }
);

const Category = model("Category", categorySchema);
module.exports = Category;
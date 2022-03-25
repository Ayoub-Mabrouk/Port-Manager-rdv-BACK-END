const {Schema,model} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const blockSchema = new Schema({

    idStorageArea: {
        type: Schema.Types.ObjectId,
        ref: "StorageArea",
        autopopulate: true
    },
    idCategory: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        autopopulate: true
    }
},
{ timestamps: true }
);
blockSchema.plugin(require('mongoose-autopopulate'));
const Block = model("Block", blockSchema);
module.exports = Block;

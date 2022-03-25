const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const containerSchema = new Schema(
    {
        reference: { type: String },
        weight: { type: String },
        dimensions: { type: String },
        brand: { type: String },
        serviceDate: { type: String },
        importStatus: { type: String },
        customFeesStatus: { type: String },
        certificat: { type: String },
        
        idSupplier: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        idShip: {
            type: Schema.Types.ObjectId,
            ref: "Ship"
        },
        idTruck: {
            type: Schema.Types.ObjectId,
            ref: "Truck"
        },
        idCategory: {
            type: Schema.Types.ObjectId,
            ref: "Category"
        },
        idBlockPart: {
            type: Schema.Types.ObjectId,
            ref: "BlockPart"
        },
    },
    { timestamps: true }
);

const Container = model("Container", containerSchema);
module.exports = Container;
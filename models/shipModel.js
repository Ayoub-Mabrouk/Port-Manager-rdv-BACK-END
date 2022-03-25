const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const shipSchema = new Schema(
    {
        name: { type: String },
        capacity: { type: Number },
        nationality: { type: String },
        type: { type: String },
        idShipOwner: {
            type: Schema.Types.ObjectId,
            ref: "ShipOwner",
        },
    },
    { timestamps: true }
);

const Ship = model("Ship", shipSchema);
module.exports = Ship;
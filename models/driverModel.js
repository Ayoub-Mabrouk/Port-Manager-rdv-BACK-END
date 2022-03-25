const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const driverSchema = new Schema(
    {
        idTruck: {
            type: Schema.Types.ObjectId,
            ref: "Truck"
        },
        name: { type: String },
        age: { type: String },
        driverLicenseIndex: { type: String }
    },
    { timestamps: true }
);

const Driver = model("Driver", driverSchema);
module.exports = Driver;
const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const reservationSchema = new Schema(
    {
        dateCheckin: { type: Date },
        numberOfContainer: { type: String },
        idSupplier: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        idShip: {
            type: Schema.Types.ObjectId,
            ref: "Ship",
        },
        idQuay: {
            type: Schema.Types.ObjectId,
            ref: "Quay",
        },
    },
);

const Reservation = model("Reservation", reservationSchema);
module.exports = Reservation;

const {model,Schema} = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const communicationChannelSchema = new Schema(
    {
        message: { type: String },
        idTruck: {
            type: Schema.Types.ObjectId,
            ref: "Truck"
        },
        idStorageArea: {
            type: Schema.Types.ObjectId,
            ref: "StorageArea"
        },
    },
    { timestamps: true }
);

const CommunicationChannel = model("CommunicationChannel", communicationChannelSchema);
module.exports = CommunicationChannel;
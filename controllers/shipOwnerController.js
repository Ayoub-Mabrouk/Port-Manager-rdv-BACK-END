const {ShipOwner} = require('../models/index');
const base = require('./baseController');

exports.createShipOwner = base.createOne(ShipOwner);
exports.updateShipOwner = base.updateOne(ShipOwner);
exports.deleteShipOwner = base.deleteOne(ShipOwner);
exports.getAllShipOwner = base.getAll(ShipOwner);
exports.getShipOwner = base.getOne(ShipOwner);
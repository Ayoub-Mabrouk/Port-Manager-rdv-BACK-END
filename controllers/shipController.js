const {Ship} = require('../models/index');
const base = require('./baseController');

exports.createShip = base.createOne(Ship);
exports.updateShip = base.updateOne(Ship);
exports.deleteShip = base.deleteOne(Ship);
exports.getAllShip = base.getAll(Ship);
exports.getShip = base.getOne(Ship);
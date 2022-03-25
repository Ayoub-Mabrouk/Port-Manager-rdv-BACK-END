const {Truck} = require('../models/index');
const base = require('./baseController');

exports.createTruck = base.createOne(Truck);
exports.updateTruck = base.updateOne(Truck);
exports.deleteTruck = base.deleteOne(Truck);
exports.getAllTruck = base.getAll(Truck);
exports.getTruck = base.getOne(Truck);
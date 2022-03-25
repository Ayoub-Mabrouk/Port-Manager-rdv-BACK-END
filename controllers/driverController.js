const {Driver} = require('../models/index');
const base = require('./baseController');

exports.createDriver = base.createOne(Driver);
exports.updateDriver = base.updateOne(Driver);
exports.deleteDriver = base.deleteOne(Driver);
exports.getAllDriver = base.getAll(Driver);
exports.getDriver = base.getOne(Driver);
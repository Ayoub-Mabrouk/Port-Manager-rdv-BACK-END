const {Quay} = require('../models/index');
const base = require('./baseController');

exports.createQuay = base.createOne(Quay);
exports.updateQuay = base.updateOne(Quay);
exports.deleteQuay = base.deleteOne(Quay);
exports.getAllQuay = base.getAll(Quay);
exports.getQuay = base.getOne(Quay);
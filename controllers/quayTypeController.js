const {QuayType} = require('../models/index');
const base = require('./baseController');

exports.createQuayType = base.createOne(QuayType);
exports.updateQuayType = base.updateOne(QuayType);
exports.deleteQuayType = base.deleteOne(QuayType);
exports.getAllQuayType = base.getAll(QuayType);
exports.getQuayType = base.getOne(QuayType);
const {CustomFee} = require('../models/index');
const base = require('./baseController');

exports.createCustomFee = base.createOne(CustomFee);
exports.updateCustomFee = base.updateOne(CustomFee);
exports.deleteCustomFee = base.deleteOne(CustomFee);
exports.getAllCustomFee = base.getAll(CustomFee);
exports.getCustomFee = base.getOne(CustomFee);
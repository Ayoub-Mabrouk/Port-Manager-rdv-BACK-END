const {Block} = require('../models/index');
const base = require('./baseController');

exports.createBlock = base.createOne(Block);
exports.updateBlock = base.updateOne(Block);
exports.deleteBlock = base.deleteOne(Block);
exports.getAllBlock = base.getAll(Block);
exports.getBlock = base.getOne(Block);
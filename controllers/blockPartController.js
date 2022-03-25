const {BlockPart} = require('../models/index');
const base = require('./baseController');

exports.createBlockPart = base.createOne(BlockPart);
exports.updateBlockPart = base.updateOne(BlockPart);
exports.deleteBlockPart = base.deleteOne(BlockPart);
exports.getAllBlockPart = base.getAll(BlockPart);
exports.getBlockPart = base.getOne(BlockPart);
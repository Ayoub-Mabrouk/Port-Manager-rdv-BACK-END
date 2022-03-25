const {StorageArea} = require('../models/index');
const base = require('./baseController');

exports.createStorageArea = base.createOne(StorageArea);
exports.updateStorageArea = base.updateOne(StorageArea);
exports.deleteStorageArea = base.deleteOne(StorageArea);
exports.getAllStorageArea = base.getAll(StorageArea);
exports.getStorageArea = base.getOne(StorageArea);
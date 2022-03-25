const {Container} = require('../models/index');
const base = require('./baseController');

exports.createContainer = base.createOne(Container);
exports.updateContainer = base.updateOne(Container);
exports.deleteContainer = base.deleteOne(Container);
exports.getAllContainer = base.getAll(Container);
exports.getContainer = base.getOne(Container);
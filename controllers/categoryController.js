const {Category} = require('../models/index');
const base = require('./baseController');

exports.createCategory = base.createOne(Category);
exports.updateCategory = base.updateOne(Category);
exports.deleteCategory = base.deleteOne(Category);
exports.getAllCategory = base.getAll(Category);
exports.getCategory = base.getOne(Category);
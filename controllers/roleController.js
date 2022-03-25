const {Role} = require('../models/index');
const base = require('./baseController');

exports.createRole = base.createOne(Role);
exports.updateRole = base.updateOne(Role);
exports.deleteRole = base.deleteOne(Role);
exports.getAllRole = base.getAll(Role);
exports.getRole = base.getOne(Role);
const {CommunicationChannel} = require('../models/index');
const base = require('./baseController');

exports.createCommunicationChannel = base.createOne(CommunicationChannel);
exports.updateCommunicationChannel = base.updateOne(CommunicationChannel);
exports.deleteCommunicationChannel = base.deleteOne(CommunicationChannel);
exports.getAllCommunicationChannel = base.getAll(CommunicationChannel);
exports.getCommunicationChannel = base.getOne(CommunicationChannel);
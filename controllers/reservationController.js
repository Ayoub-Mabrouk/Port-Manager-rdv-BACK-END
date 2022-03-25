const {Reservation} = require('../models/index');
const base = require('./baseController');

exports.createReservation = base.createOne(Reservation);
exports.updateReservation = base.updateOne(Reservation);
exports.deleteReservation = base.deleteOne(Reservation);
exports.getAllReservation = base.getAll(Reservation);
exports.getReservation = base.getOne(Reservation);
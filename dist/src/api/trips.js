"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripRoutes = void 0;
const express_1 = require("express");
const trips_1 = require("../services/trips");
exports.tripRoutes = (0, express_1.Router)();
exports.tripRoutes.post('/', trips_1.createTrip);
exports.tripRoutes.get('/', trips_1.getTrips);
exports.tripRoutes.get('/:id', trips_1.getTrip);

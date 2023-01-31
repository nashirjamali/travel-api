"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrip = exports.getTrips = exports.createTrip = void 0;
const datasource_1 = require("../configs/datasource");
const trips_entity_1 = __importDefault(require("../entities/trips.entity"));
const createTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trip = datasource_1.datasource.getRepository(trips_entity_1.default).create(req.body);
    const results = yield datasource_1.datasource.getRepository(trips_entity_1.default).save(trip);
    return res.send(results);
});
exports.createTrip = createTrip;
const getTrips = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trips = yield datasource_1.datasource.getRepository(trips_entity_1.default).find();
    res.json(trips);
});
exports.getTrips = getTrips;
const getTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const trip = yield datasource_1.datasource.getRepository(trips_entity_1.default).findOneBy({
        id: Number(req.params.id),
    });
    return res.send(trip);
});
exports.getTrip = getTrip;

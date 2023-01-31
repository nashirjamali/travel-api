"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const trips_entity_1 = __importDefault(require("../entities/trips.entity"));
dotenv_1.default.config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
const DB_PORT = Number(process.env.DB_PORT) || 3306;
exports.datasource = new typeorm_1.DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [trips_entity_1.default],
    logging: true,
    synchronize: true,
});

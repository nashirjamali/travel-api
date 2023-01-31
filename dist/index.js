"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const trips_1 = require("./src/api/trips");
const datasource_1 = require("./src/configs/datasource");
dotenv_1.default.config();
// establish database connection
datasource_1.datasource
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
const app = (0, express_1.default)();
const port = Number(process.env.PORT) || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.get('/', (req, res) => {
    res.json({ message: 'ok' });
});
/* Routes */
app.use('/trips', trips_1.tripRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

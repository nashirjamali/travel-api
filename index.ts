import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { tripRoutes } from './src/api/trips';
import { datasource } from './src/configs/datasource';

dotenv.config();

// establish database connection
datasource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

/* Routes */
app.use('/trips', tripRoutes);

/* Error handler middleware */
interface ErrorWithStatus extends Error {
  status: number;
}

app.use(
  (err: ErrorWithStatus, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.status || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });

    return;
  }
);

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

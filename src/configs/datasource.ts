import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import Trip from '../entities/trips.entity';

dotenv.config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const DB_PORT = Number(process.env.DB_PORT) || 3306;

export const datasource = new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Trip],
  logging: true,
  synchronize: true,
});

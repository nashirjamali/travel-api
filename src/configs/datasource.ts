import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

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
  entities: [__dirname + '../entities/*.entity.{js,ts}'],
  logging: true,
  synchronize: true,
});

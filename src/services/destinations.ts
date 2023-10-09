import { Request, Response } from 'express';
import { datasource } from '../configs/datasource';
import Destination from '../entities/destinations.entity';

export const createDestination = async (req: Request, res: Response) => {
  const destination = datasource.getRepository(Destination).create(req.body);
  const results = await datasource.getRepository(Destination).save(destination);
  return res.send(results);
};

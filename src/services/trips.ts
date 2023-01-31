import { Request, Response } from 'express';
import { datasource } from '../configs/datasource';
import Trip from '../entities/trips.entity';

export const createTrip = async (req: Request, res: Response) => {
  const trip = datasource.getRepository(Trip).create(req.body);
  const results = await datasource.getRepository(Trip).save(trip);
  return res.send(results);
};

export const getTrips = async (req: Request, res: Response) => {
  const trips = await datasource.getRepository(Trip).find();
  res.json(trips);
};

export const getTrip = async (req: Request, res: Response) => {
  const trip = await datasource.getRepository(Trip).findOneBy({
    id: Number(req.params.id),
  });
  return res.send(trip);
};

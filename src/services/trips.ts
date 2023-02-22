import { Request, Response } from 'express';
import { In } from 'typeorm';
import { datasource } from '../configs/datasource';
import Trip from '../entities/trips.entity';
import Wishlist from '../entities/wishlists.entity';

export const createTrip = async (req: Request, res: Response) => {
  const trip = datasource.getRepository(Trip).create(req.body);
  const results = await datasource.getRepository(Trip).save(trip);
  return res.send(results);
};

export const updateTrip = async (req: Request, res: Response) => {
  const results = await datasource.getRepository(Trip).update(
    {
      id: Number(req.params.id),
    },
    req.body
  );
  return res.send(results);
};

export const getTrips = async (req: Request, res: Response) => {
  let whereQuery = {};

  if ('is_popular' in req.query) {
    whereQuery = {
      ...whereQuery,
      is_popular: Boolean(req.query?.is_popular),
    };
  }

  const trips = await datasource.getRepository(Trip).find({
    where: whereQuery,
  });
  res.json(trips);
};

export const getTrip = async (req: Request, res: Response) => {
  const trip = await datasource.getRepository(Trip).findOneBy({
    id: Number(req.params.id),
  });
  return res.send(trip);
};

export const wishlistTrip = async (req: Request, res: Response) => {
  const tripIds = await datasource
    .getRepository(Wishlist)
    .find({ select: ['trip'] });

  const trips = await datasource.getRepository(Trip).find({
    where: {
      id: In(tripIds),
    },
  });

  res.json(trips);
};

export const popularTrip = async (req: Request, res: Response) => {};

export const addWishlistTrip = async (req: Request, res: Response) => {
  const wishlist = datasource.getRepository(Wishlist).create(req.body);
  const results = await datasource.getRepository(Wishlist).save(wishlist);
  return res.send(results);
};

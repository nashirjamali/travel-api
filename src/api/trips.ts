import { Router } from 'express';
import {
  addWishlistTrip,
  createTrip,
  getTrip,
  getTrips,
  updateTrip,
  wishlistTrip,
} from '../services/trips';

export const tripRoutes = Router();

tripRoutes.post('/', createTrip);
tripRoutes.post('/update/:id', updateTrip);
tripRoutes.get('/', getTrips);
tripRoutes.get('/details/:id', getTrip);
tripRoutes.get('/wishlists', wishlistTrip);
tripRoutes.post('/wishlists/add', addWishlistTrip);

import { Router } from 'express';
import { createTrip, getTrip, getTrips } from '../services/trips';

export const tripRoutes = Router();

tripRoutes.post('/', createTrip);
tripRoutes.get('/', getTrips);
tripRoutes.get('/:id', getTrip);

import { Router } from 'express';
import { createDestination } from '../services/destinations';

export const tripRoutes = Router();

tripRoutes.post('/', createDestination);

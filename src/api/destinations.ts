import { Router } from 'express';
import { createDestination } from '../services/destinations';

export const destinationRoutes = Router();

destinationRoutes.post('/', createDestination);

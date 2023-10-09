import express from 'express';
import { getAllEntities } from '../controller/entityRouteController';

const router = express.Router();

router.get('/getAllEntities',getAllEntities);

export default router;
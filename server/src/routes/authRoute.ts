import express from 'express';
import { login, home } from '../controller/authRoute';

const router = express.Router();

router.get('/login',login);
router.get('/swarnabha-jwellery',home);

export default router;
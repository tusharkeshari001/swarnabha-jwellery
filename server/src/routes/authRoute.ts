import express from 'express';
import { login, home } from '../controller/authRoute';

const router = express.Router();

router.get('/login',login);
router.use('/home',home);


export default router;
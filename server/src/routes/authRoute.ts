import express from 'express';
import { loginUser, signupUser } from '../controller/authRoute';

const router = express.Router();

router.get('/login',loginUser);
router.get('/signup',signupUser);

export default router;
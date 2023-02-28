import express from 'express';
import authRoute from './routes/authRoute'
import cors from 'cors';

const app:any = express();

app.use(cors());
app.use(express.json());

app.use('/',authRoute);

export default app;
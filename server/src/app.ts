import express from 'express';
import authRoute from './routes/authRoute'

const app:any = express();

app.use('/',authRoute)

export default app;
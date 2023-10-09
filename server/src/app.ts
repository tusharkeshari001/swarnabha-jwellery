import express from 'express';
import authRoute from './routes/authRoute';
import grnList from './routes/grnList';
import entityRoute from './routes/entityRoute';
import cors from 'cors';


const apps:any = express();

apps.use(cors({credentials: true, origin: 'http://192.168.1.175:3000'}));
// apps.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// apps.use(cors({credentials: true}));
apps.use(express.json());

apps.use('/',authRoute);
apps.use('/swarnabha-jwellery',grnList);
apps.use('/swarnabha-jwellery/Entity',entityRoute);
apps.use('/swarnabha-jwellery/stomp',grnList)

export default apps;

// http://192.168.1.175:3005/swarnabha-jwellery/Entity/getAllEntities
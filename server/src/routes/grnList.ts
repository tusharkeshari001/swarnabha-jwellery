import express from 'express';
import { grnUserList, grnUser, getStompData, grnHomePage, postStompData } from '../controller/grnListController';

const router = express.Router();

router.get('/',grnHomePage)
// router.get('/stomp',grnUserList)
router.get('/:info',getStompData);   
// router.post('/:info',postStompData);

export default router;
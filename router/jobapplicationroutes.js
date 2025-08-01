import express from 'express'

const router=express.Router();
import {applyjob, getapplicationsoflogineduser,updateapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/apply/:userid',getapplicationsoflogineduser);
router.put('/updateapplication/:userid',updateapplication);
router.delete('/deleteapplication/:userid',deleteapplication);

export default router
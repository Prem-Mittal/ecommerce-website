import express  from "express";
import {registerController,logincontroller,testcontroller} from '../controllers/authController.js';
//import { requireSignIn } from "../middlewares/authMiddleware.js";

const router=express.Router();

router.post('/register',registerController)

//login||post

router.post('/login',logincontroller)

//router.get('/test',requireSignIn,testcontroller);

export default router;
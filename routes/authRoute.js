import express, { Router } from 'express';
import {registerController, loginController} from '../controllers/authConroller.js'

// router object
const router = express.Router();

// routing
// register || method POST
router.post('/register', registerController)

// Login || POST method
router.post('/login', loginController);

export default router;
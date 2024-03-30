import express, { Router } from 'express';
import {registerController} from '../controllers/authConroller.js'

// router object
const router = express.Router();

// route
// register || method POST
router.post('/register', registerController)

export default router;
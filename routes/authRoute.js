import express, { Router } from 'express';
import {registerController, loginController, testController,} from '../controllers/authConroller.js'
import { isAdmin, requireSignIn } from '../middlwares/authMiddleware.js';

// router object
const router = express.Router();

// routing
// register || method POST
router.post('/register', registerController)

// Login || POST method
router.post('/login', loginController);

// test
router.get('/test',requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

export default router;
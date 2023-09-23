import express from "express";
import {registerController,logincontroller,testcontroller,} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

//login||post

router.post("/login", logincontroller);

router.get("/test", requireSignIn, isAdmin, testcontroller);

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


export default router;

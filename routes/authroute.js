import express from "express";
import {registerController,logincontroller,testcontroller,forgotPasswordController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

//login||post

router.post("/login", logincontroller);

router.get("/test", requireSignIn, isAdmin, testcontroller);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


export default router;

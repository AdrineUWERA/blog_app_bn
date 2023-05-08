import express from "express";  
import {
  SignUp,
  UserLogin,
  getOneUser,
} from "../controllers/UserControllers.js";
 import { userValidator, userloginValidator } from "../validations/userValidation/userValidator.js"

const userRouter = express.Router();

userRouter.post("/signup", userValidator, SignUp);
userRouter.get("/:id", getOneUser);
userRouter.post("/login", userloginValidator, UserLogin);

export default userRouter;

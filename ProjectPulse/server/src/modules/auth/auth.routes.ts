import { Router } from "express";
import { authController } from "./auth.controller";

const route = Router()

route.post('/signup', authController.createUser)
route.post('/signin', authController.signIn)
// route.post('/signin', )
export const authRoute = route
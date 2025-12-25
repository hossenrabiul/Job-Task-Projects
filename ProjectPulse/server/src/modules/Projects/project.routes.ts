import { Router } from "express";
import { projectController } from "./project.controller";

const route = Router()

route.post('/createproject', projectController.createproject)

export const projectRoute = route
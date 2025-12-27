import { Router } from "express";
import { projectController } from "./project.controller";

const route = Router()

route.post('/createproject', projectController.createproject)
route.get('/getproject/:id', projectController.getProject)

export const projectRoute = route
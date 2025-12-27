import { Router } from "express";
import { clientController } from "./client.controller";

const route = Router();

route.post('/', clientController.submitClientFeedback)
export const clientRoute = route;
import { Router } from "express";
import { employeeController } from "./employee.controller";

const route = Router();

route.post('/', employeeController.submitEmployeeCheckin)


export const employeeRoute = route;
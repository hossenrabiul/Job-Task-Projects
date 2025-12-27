import { Router } from "express"
import { risksController } from "./risks.controller"

const route = Router()

route.post('/createRisk', risksController.createRisk)
route.get('/getAllRisksList', risksController.getAllRisksList)
route.get('/getHighRisks', risksController.getHighRisks)
export const riksRoute = route
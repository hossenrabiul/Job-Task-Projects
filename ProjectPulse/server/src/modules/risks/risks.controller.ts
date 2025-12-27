import { Request, Response } from "express";
import { riskServices } from "./risks.service";

const createRisk = async (req: Request, res: Response) => {
  try {
    const result = await riskServices.createRisk(req.body);
    res.status(201).json({
      success: true,
      message: "Risk created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllRisksList = async (req: Request, res: Response) => {
  try {
    const result = await riskServices.getAllRisksList();
    res.status(200).json({
      success: true,
      message: "Risks retrived successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getHighRisks = async (req: Request, res: Response) => {
  try {
    const result = await riskServices.getHighRisks();
    res.status(200).json({
      success: true,
      message: "High Risks retrived successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const risksController = {
  createRisk,
  getAllRisksList,
  getHighRisks,
};

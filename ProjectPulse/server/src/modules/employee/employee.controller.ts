import { Request, Response } from "express";
import { employeeServices } from "./employee.service";

const submitEmployeeCheckin = async (req: Request, res: Response) => {
  try {
    const result = await employeeServices.submitEmployeeCheckin(req.body);
    res.status(203).json({
      success: true,
      message: "Weekly check-in submitted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const employeeController = {
  submitEmployeeCheckin,

};

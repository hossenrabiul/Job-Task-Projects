import { Request, Response } from "express";
import { projectServices } from "./project.service";
import { UserSchema } from "../../models/UserSchema.model";

const createproject = async (req: Request, res: Response) => {
  const { clientId, employeeIds, startDate, endDate } = req.body;
  
  //   Valudate date
  if (new Date(startDate) > new Date(endDate)) {
    return res.status(400).json({
      message: "Start date cannot be after end date",
    });
  }

  //   validate client
  const client = await UserSchema.findOne({ _id: clientId });
  if (!client) {
    return res.status(400).json({ message: "Invalid client" });
  }

  //   validate employees
  const employees = await UserSchema.find({ _id: { $in: employeeIds } });
  if (employees?.length != employeeIds?.length) {
    return res.status(400).json({
      message: "One or more employees are invalid",
    });
  }


  try {
    const result = await projectServices.createproject(req.body);
    res.status(203).json({
      success: true,
      message: "Product created successfully",
      product: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: error.message,
    });
  }
};

const getProject = async (req : Request, res : Response) =>{
  const {id} = req.params
  try {
    const project = await projectServices.getProject(id!)
    res.status(200).json({
      success : true,
      message : 'Project retrived successfully',
      data : project
    })
  } catch (error : any) {
    res.status(500).json({
      success : false,
      message : 'Failed to retrive project',
      error : error.message
    })
  }
}
export const projectController = {
  createproject,
  getProject,
};

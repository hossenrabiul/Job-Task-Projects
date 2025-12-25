import { Request, Response } from "express";
import { authServices } from "./auth.service";

const createUser = async (req: Request, res: Response) => {
  
  try {
    const user = await authServices.createUser(req.body)
    res.status(203).json({
      success: true,
      user: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const signIn = async (req : Request, res : Response) => {
  const {email, password} = req.body
  try {
    const user = await authServices.signIn(email, password)
    res.status(200).json({
      success : true,
      message : "sign In successfully",
      data : user,
    })
  } catch (error : any) {
    res.status(500).json({
      success : false,
      message : error.message
    })
  }
}
export const authController = {
  createUser,
  signIn,
};

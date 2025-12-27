import { NextFunction, Request, Response } from "express";
import jwt, { decode, JwtPayload } from "jsonwebtoken";
import { UserSchema } from "../models/UserSchema.model";

const auth = (...roles: ("admin" | "client" | "employee")[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const headers = req.headers.authorization;
      
      if (!headers || !headers.startsWith("Bearer")) {
        throw new Error("Unauthorized");
      }
      const token = headers.split(" ")[1];
      // console.log(token)
      if (!token) {
        throw new Error("You are not authorized");
      }
      const secret_key = process.env.SECRET_KEY;
      const decoded = jwt.verify(token, secret_key!) as JwtPayload;
      const user = await UserSchema.findOne({ email: decoded.email });
      if (!user) {
        throw new Error("No user found");
      }
    //   console.log(user)
      if (roles.length && !roles.includes(user?.role!)) {
        throw new Error("You are not allowed!");
      }
      next();
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default auth
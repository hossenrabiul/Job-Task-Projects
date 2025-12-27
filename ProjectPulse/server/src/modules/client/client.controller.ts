import { Request, Response } from "express";
import { clinetServices } from "./client.service";

const submitClientFeedback = async (req : Request, res : Response) =>{
    try {
        const result = await clinetServices.submitClientFeedback(req.body)
        res.status(203).json({
            success : true,
            message : "Weekly client feedback has been submitted successfully!",
            data : result,
        })
    } catch (error : any) {
        res.status(500).json({
            success : false,
            message : error.message,
        })
    }
}

export const clientController = {
    submitClientFeedback
}
import { Types } from "mongoose";
import calculateHealtScore from "../../calculate/calculateHealthScore";
import { ProjectSchema } from "../../models/ProjectSchema.model"

const createproject = async (body : Record<string, unknown>) =>{
    const {name, description, clientId, employeeIds, startDate, endDate, status} = body;
    const healthScore = calculateHealtScore(status as string)

    const data : Record<string, unknown> = {
        name,
        description,
        client : clientId,
        employees : employeeIds,
        startDate,
        endDate,
        status,
        healthScore : healthScore,
    }
    const result = await ProjectSchema.create(data)
    return result
}

const getProject = async(id : string) =>{
    const result = await ProjectSchema.where("_id").equals(id).populate("client")
   
    result[0].client = "694be0fb2e23885105a756ce"
    await result[0].save();
    return result
}
export const projectServices = {
    createproject,
    getProject,
}
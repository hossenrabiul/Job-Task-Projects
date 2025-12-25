import { ProjectSchema } from "../../models/ProjectSchema.model"

const createproject = async (body : Record<string, unknown>) =>{
    
    const result = await ProjectSchema.create(body)
    return result
}

export const projectServices = {
    createproject,
}
import { EmployeeCheckInSchema } from "../../models/EmployeeCheckIn"

const submitEmployeeCheckin = async(body : Record<string, unknown>)=> {
    const {project, employee,progressSummary, confidenceLevel, percentageLevel} = body
    const data : Record<string, unknown> = {
        project,
        employee,
        progressSummary,
        confidenceLevel,
        completionPercentage : percentageLevel
    }
    const result = await EmployeeCheckInSchema.create(data)
    console.log(result)
    return result
}


export const employeeServices = {
    submitEmployeeCheckin,
}
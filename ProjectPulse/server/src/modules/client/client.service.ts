import { ClientFeedbackSchema } from "../../models/ClientFeedback"

const submitClientFeedback = async(body : Record<string, unknown>) => {
    console.log(body)
    const result = await ClientFeedbackSchema.create(body)
    return result
}
export const clinetServices = {
    submitClientFeedback,
}
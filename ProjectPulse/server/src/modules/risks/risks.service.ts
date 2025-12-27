import { RiskSchema } from "../../models/RiskSchema";

const createRisk = async (body: Record<string, unknown>) => {
  console.log(body);
  const result = await RiskSchema.create(body);
  return result;
};

const getAllRisksList = async () => {
  const result = await RiskSchema.find();
  return result;
};

const getHighRisks = async () => {
  const result = await RiskSchema.find({
    severity: "high",
    status: "open",
  })
 
  const risksMap : Record<string, any> = {};
  result.forEach((risk) => {
    risksMap[risk._id.toString()] = risk
  });
  const totalRisks = Object.values(risksMap).length
  const highRisks = Object.values(risksMap)
   return {totalRisks, highRisks}
};
export const riskServices = {
  createRisk,
  getAllRisksList,
  getHighRisks,
};

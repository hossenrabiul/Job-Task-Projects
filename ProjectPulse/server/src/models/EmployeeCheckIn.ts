import mongoose from "mongoose";

const employeeCheckInSchema = new mongoose.Schema(
  {
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    progressSummary: {
      type: String,
      required: true,
    },
    challenges: {
      type: String,
    },

    confidenceLevel: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    completionPercentage: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EmployeeCheckInSchema = mongoose.model('EmployeeCheckIn', employeeCheckInSchema)
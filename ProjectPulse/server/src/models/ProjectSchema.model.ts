// models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserSchema",
      required: true,
    },
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema",
        required: true,
      },
    ],
    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["On Track", "At Risk", "Critical", "Completed"],
      default: "On Track",
    },
    healthScore : {
        type : Number,
    }
  },
  { timestamps: true }
);
export const ProjectSchema = mongoose.model("Project", projectSchema);

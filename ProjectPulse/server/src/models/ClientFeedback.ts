import mongoose from "mongoose";

const clientFeedbackSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    satisfactionRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    communicationRating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comments: {
      type: String,
    },
    flagIssue: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const ClientFeedbackSchema = mongoose.model(
  "ClientFeedback",
  clientFeedbackSchema
);

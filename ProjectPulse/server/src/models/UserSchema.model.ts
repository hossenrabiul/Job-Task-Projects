import mongoose, { models, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique : true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: [true],
      enum: ["admin", "client", "employee"],
    },
  },
  {
    timestamps: true,
  }
);

export const UserSchema = mongoose.model("user", userSchema);

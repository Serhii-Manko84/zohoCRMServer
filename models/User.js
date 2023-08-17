import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    dealName: {
      type: String,
      required: true,
    },
    dealStage: {
      type: String,
      required: true,
    },
    accountName: {
      type: String,
      required: true,
    },
    accountWebsite: {
      type: String,
      required: true,
      unique: true,
    },
    accountPhone: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);

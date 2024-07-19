import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const projectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 20,
        },
        dec: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
        },
        color: {
            type: String,
        },
    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

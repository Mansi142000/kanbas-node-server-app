import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    number: String,
    description: String,
    department: String,
    startDate: Date,
    endDate: Date,
    credits: Number,
  },
  { collection: "courses" }
);

export default courseSchema;

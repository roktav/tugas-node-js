import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoryShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model("Category", CategoryShema);

export default CategoryModel;
import mongoose, { Document } from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});

type CategoryDocument = CategorySchema & Document;

const categoryModel = mongoose.model('Category', CategorySchema);
export default categoryModel;

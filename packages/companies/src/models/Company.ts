import mongoose, { Schema, Document } from 'mongoose';

export interface ICompany extends Document {
  _id: number;
  name: string;
  user_id: number;
  user_name: string;
}

const CompanySchema: Schema = new Schema({
  _id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  user_id: { type: Number, required: true },
  user_name: { type: String, required: true },
});

export default mongoose.model<ICompany>('Company', CompanySchema);

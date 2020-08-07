import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  _id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  _id: { type: Number, required: true, unique: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

export default mongoose.model<IUser>('User', UserSchema);

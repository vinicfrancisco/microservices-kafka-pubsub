import { IUser } from '../models/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import IDeleteUserDTO from '../dtos/IDeleteUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
  update(data: IUpdateUserDTO): Promise<IUser>;
  delete(data: IDeleteUserDTO): Promise<void>;
}

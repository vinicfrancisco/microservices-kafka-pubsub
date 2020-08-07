import { IUser } from '../models/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<IUser[]>;
  create(data: ICreateUserDTO): Promise<IUser>;
  update(data: IUpdateUserDTO): Promise<IUser>;
}

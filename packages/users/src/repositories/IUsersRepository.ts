import User from '../entities/IUser';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  update(data: IUpdateUserDTO): Promise<User>;
}

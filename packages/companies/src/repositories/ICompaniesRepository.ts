import { ICompany } from '../models/Company';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<ICompany[]>;
  create(data: ICreateCompanyDTO): Promise<ICompany>;
  updateUser(data: IUpdateUserDTO): Promise<ICompany>;
}

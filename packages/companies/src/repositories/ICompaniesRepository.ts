import Company from '../entities/ICompany';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<Company[]>;
  create(data: ICreateCompanyDTO): Promise<Company>;
  updateUser(data: IUpdateUserDTO): Promise<Company>;
}

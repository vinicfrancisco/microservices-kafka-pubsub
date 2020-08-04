import Company from '../infra/http/entities/ICompany';
import ICreateCompanyDTO from '../infra/http/dtos/ICreateCompanyDTO';
import IUpdateUserDTO from '../infra/http/dtos/IUpdateUserDTO';

export default interface ICompaniesRepository {
  index(): Promise<Company[]>;
  create(data: ICreateCompanyDTO): Promise<Company>;
  updateUser(data: IUpdateUserDTO): Promise<Company>;
}

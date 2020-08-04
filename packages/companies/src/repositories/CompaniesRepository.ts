import { uuid } from 'uuidv4';

import Company from '../infra/http/entities/ICompany';
import ICompaniesRepository from './ICompaniesRepository';
import ICreateCompanyDTO from '../infra/http/dtos/ICreateCompanyDTO';
import IUpdateUserDTO from '../infra/http/dtos/IUpdateUserDTO';

class CompaniesRepository implements ICompaniesRepository {
  private companies: Company[] = [];

  public async index(): Promise<Company[]> {
    return this.companies;
  }

  public async create({
    name,
    user_id,
    user_name,
  }: ICreateCompanyDTO): Promise<Company> {
    const company = {
      id: uuid(),
      name,
      user_id,
      user_name,
    };

    this.companies.push(company);

    return company;
  }

  public async updateUser({
    company_id,
    user_id,
    user_name,
  }: IUpdateUserDTO): Promise<Company> {
    const findIndex = this.companies.findIndex(
      findCompany => findCompany.id === company_id,
    );

    this.companies[findIndex] = {
      ...this.companies[findIndex],
      user_id,
      user_name,
    };

    return this.companies[findIndex];
  }
}

export default CompaniesRepository;

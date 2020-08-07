import Company, { ICompany } from '../models/Company';
import ICompaniesRepository from './ICompaniesRepository';
import ICreateCompanyDTO from '../dtos/ICreateCompanyDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

class CompaniesRepository implements ICompaniesRepository {
  public async index(): Promise<ICompany[]> {
    const companies = await Company.find();

    return companies;
  }

  public async create({
    name,
    user_id,
    user_name,
  }: ICreateCompanyDTO): Promise<ICompany> {
    const company = await Company.create({
      _id: Math.round(Math.random() * 1000),
      name,
      user_id,
      user_name,
    });

    return company;
  }

  public async updateUser({
    user_id,
    user_name,
  }: IUpdateUserDTO): Promise<ICompany | null> {
    const company = await Company.findOne({ user_id });

    if (!company) {
      return null;
    }

    await company.update({
      user_name,
    });

    await company.save();

    return company;
  }
}

export default CompaniesRepository;

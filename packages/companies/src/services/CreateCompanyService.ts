import { inject, injectable } from 'tsyringe';

import Company from '../infra/http/entities/ICompany';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  name: string;
  user_id: string;
  user_name: string;
}

@injectable()
class CreateCompanyService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({
    name,
    user_id,
    user_name,
  }: IRequest): Promise<Company> {
    const company = this.companiesRepository.create({
      name,
      user_id,
      user_name,
    });

    return company;
  }
}

export default CreateCompanyService;

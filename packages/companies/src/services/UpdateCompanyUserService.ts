import { inject, injectable } from 'tsyringe';

import Company from '../infra/http/entities/ICompany';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  user_id: string;
  user_name: string;
}

@injectable()
class UpdateCompanyUser {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({ user_id, user_name }: IRequest): Promise<Company> {
    const company = this.companiesRepository.updateUser({
      user_id,
      user_name,
    });

    return company;
  }
}

export default UpdateCompanyUser;

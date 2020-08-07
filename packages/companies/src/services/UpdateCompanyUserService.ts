import { inject, injectable } from 'tsyringe';

import { ICompany } from '../models/Company';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  user_id: number;
  user_name: string;
}

@injectable()
class UpdateCompanyUser {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute({
    user_id,
    user_name,
  }: IRequest): Promise<ICompany | null> {
    const company = this.companiesRepository.updateUser({
      user_id,
      user_name,
    });

    return company;
  }
}

export default UpdateCompanyUser;

import { inject, injectable } from 'tsyringe';

import { ICompany } from '../models/Company';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

interface IRequest {
  name: string;
  user_id: number;
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
  }: IRequest): Promise<ICompany> {
    const company = this.companiesRepository.create({
      name,
      user_id,
      user_name,
    });

    return company;
  }
}

export default CreateCompanyService;

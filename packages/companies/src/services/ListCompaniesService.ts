import { inject, injectable } from 'tsyringe';

import Company from '../entities/ICompany';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

@injectable()
class ListCompaniesService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute(): Promise<Company[]> {
    const companies = this.companiesRepository.index();

    return companies;
  }
}

export default ListCompaniesService;

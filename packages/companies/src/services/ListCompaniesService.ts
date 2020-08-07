import { inject, injectable } from 'tsyringe';

import { ICompany } from '../models/Company';
import ICompaniesRepository from '../repositories/ICompaniesRepository';

@injectable()
class ListCompaniesService {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async execute(): Promise<ICompany[]> {
    const companies = this.companiesRepository.index();

    return companies;
  }
}

export default ListCompaniesService;

import { inject, injectable } from 'tsyringe';
import { Request, Response } from 'express';

import ICompaniesRepository from '../../../shared/repositories/ICompaniesRepository';

@injectable()
export default class CompaniesController {
  constructor(
    @inject('CompaniesRepository')
    private companiesRepository: ICompaniesRepository,
  ) {}

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, user_id, user_name } = request.body;

    const company = await this.companiesRepository.create({
      name,
      user_id,
      user_name,
    });

    return response.send(company);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const companies = await this.companiesRepository.index();

    return response.send(companies);
  }
}

import { Request, Response } from 'express';

import CompaniesRepository from '../repositories/CompaniesRepository';

const companiesRepository = new CompaniesRepository();

export default class CompaniesController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, user_id, user_name } = request.body;

    const company = await companiesRepository.create({
      name,
      user_id,
      user_name,
    });

    return response.send(company);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const companies = await companiesRepository.index();

    return response.send(companies);
  }
}

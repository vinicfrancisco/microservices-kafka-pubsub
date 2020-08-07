import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompanyService from '../../../services/CreateCompanyService';
import ListCompaniesService from '../../../services/ListCompaniesService';

export default class CompaniesController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, user_id, user_name } = request.body;

    const createCompany = container.resolve(CreateCompanyService);

    const company = await createCompany.execute({
      name,
      user_id: Number(user_id),
      user_name,
    });

    return response.send(company);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listCompanies = container.resolve(ListCompaniesService);

    const companies = await listCompanies.execute();

    return response.send(companies);
  }
}

import { container } from 'tsyringe';

import ICompaniesRepository from '../../repositories/ICompaniesRepository';
import CompaniesRepository from '../../repositories/CompaniesRepository';

container.registerSingleton<ICompaniesRepository>(
  'CompaniesRepository',
  CompaniesRepository,
);

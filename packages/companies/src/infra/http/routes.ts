import { container } from 'tsyringe';
import { Router } from 'express';

import CompaniesController from './controllers/CompaniesControllers';

const companiesController = container.resolve(CompaniesController);

const routes = Router();

routes.get('/companies', companiesController.index);

routes.post('/companies', companiesController.store);

export default routes;

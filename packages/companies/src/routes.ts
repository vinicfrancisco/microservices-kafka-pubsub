import { Router } from 'express';

import CompaniesController from './controllers/CompaniesControllers';

const companiesController = new CompaniesController();

const routes = Router();

routes.get('/companies', companiesController.index);

routes.post('/companies', companiesController.store);

export default routes;

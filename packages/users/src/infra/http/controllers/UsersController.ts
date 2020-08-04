import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';
import ListUsersService from '../../../services/ListUsersService';
import UpdateUserService from '../../../services/UpdateUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute();

    return response.send(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.send(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      id,
      name,
      email,
      password,
    });

    return response.send(user);
  }
}

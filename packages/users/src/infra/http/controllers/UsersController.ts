import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';
import ListUsersService from '../../../services/ListUsersService';
import UpdateUserService from '../../../services/UpdateUserService';
import DeleteUserService from '../../../services/DeleteUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUsers = container.resolve(ListUsersService);

    const users = await listUsers.execute();

    return response.send(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      first_name,
      last_name,
      email,
    });

    return response.send(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { first_name, last_name, email } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const user = await updateUserService.execute({
      id,
      first_name,
      last_name,
      email,
    });

    return response.send(user);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = container.resolve(DeleteUserService);

    await deleteUserService.execute({ id });

    return response.status(204).send();
  }
}

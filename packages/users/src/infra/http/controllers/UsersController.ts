import { Request, Response } from 'express';
import client from '../../kafka/client';

import UsersRepository from '../repositories/UserRepository';

const usersRepository = new UsersRepository();

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await usersRepository.index();

    return response.send(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const user = await usersRepository.create({
      name,
      email,
      password,
    });

    return response.send(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password } = request.body;

    const user = await usersRepository.update({
      user_id: id,
      name,
      email,
      password,
    });

    await client.producer().send({
      topic: 'companies.update-user',
      messages: [{ value: JSON.stringify(user) }],
    });

    return response.send(user);
  }
}

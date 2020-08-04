import { inject, injectable } from 'tsyringe';

import User from '../entities/IUser';
import IUsersRepository from '../repositories/IUsersRepository';

import client from '../infra/kafka/client';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id, name, email, password }: IRequest): Promise<User> {
    const user = await this.usersRepository.update({
      id,
      name,
      email,
      password,
    });

    await client.producer().send({
      topic: 'companies.update-user',
      messages: [{ value: JSON.stringify(user) }],
    });

    return user;
  }
}

export default UpdateUserService;

import { inject, injectable } from 'tsyringe';

import { IUser } from '../models/User';
import IUsersRepository from '../repositories/IUsersRepository';

import pubSubClient from '../infra/pubsub/client';

interface IRequest {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

@injectable()
class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    id,
    first_name,
    last_name,
    email,
  }: IRequest): Promise<IUser> {
    const user = await this.usersRepository.update({
      id: Number(id),
      first_name,
      last_name,
      email,
    });

    console.log(user);

    const dataBuffer = Buffer.from(JSON.stringify(user));
    await pubSubClient.topic('update-user').publish(dataBuffer, {
      origin: 'users',
    });

    return user;
  }
}

export default UpdateUserService;

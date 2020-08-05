import { inject, injectable } from 'tsyringe';

import User from '../entities/IUser';
import IUsersRepository from '../repositories/IUsersRepository';

// import kafkaClient from '../infra/kafka/client';
import pubSubClient from '../infra/pubsub/client';

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

    /**
     * Kafka Message
     */
    // await kafkaClient.producer().send({
    //   topic: 'companies.update-user',
    //   messages: [{ value: JSON.stringify(user) }],
    // });

    /**
     * Pub/Sub Message
     */
    const dataBuffer = Buffer.from(JSON.stringify(user));

    await pubSubClient.topic('update-user').publish(dataBuffer, {
      origin: 'users',
    });

    return user;
  }
}

export default UpdateUserService;

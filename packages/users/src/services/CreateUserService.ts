import { inject, injectable } from 'tsyringe';

import User from '../entities/IUser';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;

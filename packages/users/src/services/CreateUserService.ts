import { inject, injectable } from 'tsyringe';

import { IUser } from '../models/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  first_name: string;
  last_name: string;
  email: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    first_name,
    last_name,
    email,
  }: IRequest): Promise<IUser> {
    const user = this.usersRepository.create({
      first_name,
      last_name,
      email,
    });

    return user;
  }
}

export default CreateUserService;

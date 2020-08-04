import { inject, injectable } from 'tsyringe';

import User from '../entities/IUser';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const companies = this.usersRepository.index();

    return companies;
  }
}

export default ListUsersService;

import { inject, injectable } from 'tsyringe';

import { IUser } from '../models/User';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(): Promise<IUser[]> {
    const companies = this.usersRepository.index();

    return companies;
  }
}

export default ListUsersService;

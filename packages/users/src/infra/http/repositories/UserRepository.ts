import { uuid } from 'uuidv4';

import User from '../entities/IUser';
import IUserRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

class UserRepository implements IUserRepository {
  private users: User[] = [];

  public async index(): Promise<User[]> {
    return this.users;
  }

  public async create({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };

    this.users.push(user);

    return user;
  }

  public async update({
    id,
    name,
    email,
    password,
  }: IUpdateUserDTO): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === id);

    this.users[findIndex] = {
      ...this.users[findIndex],
      name,
      email,
      password,
    };

    return this.users[findIndex];
  }
}

export default UserRepository;

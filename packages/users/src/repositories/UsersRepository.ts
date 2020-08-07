import User, { IUser } from '../models/User';
import IUserRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

class UserRepository implements IUserRepository {
  public async index(): Promise<IUser[]> {
    const users = await User.find();

    return users;
  }

  public async create({
    first_name,
    last_name,
    email,
  }: ICreateUserDTO): Promise<IUser> {
    const user = await User.create({
      _id: Math.round(Math.random() * 1000),
      first_name,
      last_name,
      email,
    });

    return user;
  }

  public async update({
    id,
    first_name,
    last_name,
    email,
  }: IUpdateUserDTO): Promise<IUser> {
    const user = await User.findById(id);

    if (!user) {
      throw new Error('UserNotFound');
    }

    await user.update({
      first_name,
      last_name,
      email,
    });

    return user;
  }
}

export default UserRepository;

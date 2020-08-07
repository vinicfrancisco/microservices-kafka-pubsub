import User, { IUser } from '../models/User';
import IUserRepository from './IUsersRepository';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import IDeleteUserDTO from '../dtos/IDeleteUserDTO';

class UserRepository implements IUserRepository {
  public async index(): Promise<IUser[]> {
    const users = await User.find();

    return users;
  }

  public async create({
    id,
    first_name,
    last_name,
    email,
  }: ICreateUserDTO): Promise<IUser> {
    const user = await User.create({
      _id: id || Math.round(Math.random() * 1000),
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
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        first_name,
        last_name,
        email,
      },
      { new: true },
    );

    if (!user) {
      throw new Error('UserNotFound');
    }

    await user.save();

    return user;
  }

  public async delete({ id }: IDeleteUserDTO): Promise<void> {
    await User.findByIdAndDelete(id);
  }
}

export default UserRepository;

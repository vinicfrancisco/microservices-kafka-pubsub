import { container } from 'tsyringe';
import pubSubClient from '../client';

import UpdateCompanyUserService from '../../../services/UpdateCompanyUserService';

interface IUser {
  _id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface IMessage {
  data: IUser;
  ack(): void;
}

export default class UpdateUserConsumer {
  constructor() {
    this.setupConsumer();
  }

  async setupConsumer(): Promise<void> {
    const subscription = pubSubClient.subscription('companies.update-user');

    const messageHandler = async (message: IMessage): Promise<void> => {
      const user: IUser = JSON.parse(String(message.data));

      const updateCompanyUser = container.resolve(UpdateCompanyUserService);

      await updateCompanyUser.execute({
        user_id: Number(user._id),
        user_name: `${user.first_name} ${user.last_name}`,
      });

      message.ack();
    };

    subscription.on('message', messageHandler);

    console.log('Pub/Sub listening to messages!');
  }
}

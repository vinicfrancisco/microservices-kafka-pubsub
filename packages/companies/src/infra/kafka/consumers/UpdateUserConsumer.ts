import { container } from 'tsyringe';
import kafka from '../client';

import UpdateCompanyUserService from '../../../services/UpdateCompanyUserService';

interface IMessage {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default class UpdateUserConsumer {
  constructor() {
    this.setupConsumer();
  }

  async setupConsumer(): Promise<void> {
    const consumer = kafka.consumer({
      groupId: 'companies',
    });

    await consumer.connect();
    await consumer.subscribe({
      topic: 'companies.update-user',
      fromBeginning: true,
    });

    await consumer.run({
      async eachMessage({ message }) {
        const user: IMessage = JSON.parse(message.value.toString());

        const updateCompanyUser = container.resolve(UpdateCompanyUserService);

        await updateCompanyUser.execute({
          user_id: user.id,
          user_name: user.name,
        });
      },
    });

    console.log('Listening to kafka messages!');
  }
}

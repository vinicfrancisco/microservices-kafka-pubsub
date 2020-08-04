import { container } from 'tsyringe';
import kafka from '../client';

import UpdateCompanyUserService from '../../../services/UpdateCompanyUserService';

interface IMessage {
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
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
        const data: IMessage = JSON.parse(message.value.toString());

        const updateCompanyUser = container.resolve(UpdateCompanyUserService);

        const company = await updateCompanyUser.execute({
          user_id: data.user.id,
          user_name: data.user.name,
        });

        console.log(`DEU CERTO: `, company);
      },
    });

    console.log('Listening to messages!');
  }
}

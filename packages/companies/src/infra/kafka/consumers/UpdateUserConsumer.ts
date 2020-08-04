import kafka from '../client';

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
        // const data: IMessage = JSON.parse(message.value.toString());
        // Update company user;
      },
    });

    console.log('Listening to messages!');
  }
}

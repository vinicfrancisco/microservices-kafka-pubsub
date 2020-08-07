// import { container } from 'tsyringe';
import kafka from '../client';

export default class UsersConsumers {
  constructor() {
    this.setupConsumer();
  }

  async setupConsumer(): Promise<void> {
    const consumer = kafka.consumer({
      groupId: '2',
    });

    await consumer.connect();
    await consumer.subscribe({
      topic: 'dbserver1.inventory.customers',
    });

    await consumer.run({
      async eachMessage({ message }) {
        console.log(JSON.parse(message.value.toString()));
      },
    });

    console.log('Listening to kafka messages!');
  }
}

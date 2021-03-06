import { container } from 'tsyringe';
import kafka from '../client';

import CreateUserService from '../../../services/CreateUserService';
import UpdateUserService from '../../../services/UpdateUserService';
import DeleteUserService from '../../../services/DeleteUserService';

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
      topic: 'server.public.customers',
    });

    await consumer.run({
      async eachMessage({ message }) {
        if (message.value !== null) {
          const { payload } = JSON.parse(message.value.toString());
          const { op, before, after } = payload;

          if (op === 'c') {
            console.log('ADICIONOU');

            const createUserService = container.resolve(CreateUserService);

            const { id, email, first_name, last_name } = after;

            await createUserService.execute({
              id,
              email,
              first_name,
              last_name,
            });
          }

          if (op === 'd') {
            console.log('REMOVEU');

            const deleteUserService = container.resolve(DeleteUserService);

            await deleteUserService.execute({
              id: before.id,
            });
          }

          if (op === 'u') {
            console.log('EDITOU');

            const updateUserService = container.resolve(UpdateUserService);

            const { id, email, first_name, last_name } = after;

            await updateUserService.execute({
              id,
              email,
              first_name,
              last_name,
            });
          }
        }
      },
    });

    console.log('Listening to kafka messages!');
  }
}

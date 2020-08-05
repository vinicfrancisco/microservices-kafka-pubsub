import { PubSub } from '@google-cloud/pubsub';

const pubSubClient = new PubSub({ projectId: 'pubsub-285318' });

export default pubSubClient;

import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['192.168.2.103:9092'],
  logLevel: logLevel.WARN,
  clientId: 'users',
});

export default kafka;

import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['192.168.0.231:9092'],
  logLevel: logLevel.WARN,
  clientId: 'users',
});

export default kafka;

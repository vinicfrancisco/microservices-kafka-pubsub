import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: [`${process.env.IP_ADDRESS}:9092`],
  logLevel: logLevel.WARN,
  clientId: 'users',
});

export default kafka;

# Microservices with Kafka and Pub/Sub

This is a small microservice project to test the comunication between microservices using Express, Kafka and Google Cloud Pub/Sub.

Kafka communication on this application is to populate MongoDB with updates on a database that is shared using [Debezium](https://debezium.io/documentation/reference/1.2/).

If you want to run this application and see the communication flux, you need follow this steps to build Debezium and kafka structure [Debezium Tutorial](https://debezium.io/documentation/reference/1.2/tutorial.html)

After that, if you want to see the comunication between the microservices, you need to setup a GCP Pub/Sub project, just follow this tutorial: [Pub/Sub Quick Start](https://cloud.google.com/pubsub/docs/quickstarts).

## 🛠 Made With 🛠

- 🟢 NodeJS
- 🔵 TypeScript
- 🟢 Mongoose

## Communication using
- 🟢 Express
- 🟠 Kafka
- 🟡 Pub/Sub

## Monorepo Structure

This project uses monorepo structure, to install the dependences just run the following command:

```
    yarn
```

## Kafka

Configure Kafka just running this command on the root of the project:

```
    docker-compose up
```

## Running Microservices

There are 2 microservices on this project. Run the following commands on the root of the project

```
    cd packages/companies && yarn dev
```

```
    cd packages/users && yarn dev
```

## Follow me on my social medias!
<a href="https://www.linkedin.com/in/vinicfrancisco/" target="_blank">
    <img src="https://raw.githubusercontent.com/vinicfrancisco/vinicfrancisco/master/assets/linkedin.svg" width="21px"  alt="LinkedIn" align="left" />
</a>

<a href="https://www.instagram.com/vinicfrancisco/" target="_blank">
  <img src="https://raw.githubusercontent.com/vinicfrancisco/vinicfrancisco/master/assets/instagram.svg" width="21px"  alt="Instagram" align="left" />
</a>

<a href="https://telegram.me/vinicfrancisco" target="_blank">
  <img src="https://raw.githubusercontent.com/vinicfrancisco/vinicfrancisco/master/assets/telegram.svg" width="21px"  alt="Telegram" align="left" />
</a>

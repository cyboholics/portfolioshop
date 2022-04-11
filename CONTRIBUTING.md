# Contribution guide

This repository is about building an open source portfolio management system. You can contribute to any part of the project from a small UI change to a humangous change in the system architecture. You can find current issues on the [issues tab](https://github.com/Portfolio-Shop/portfolioshop/issues) or create a new issue there. Once issue is assigned to you, you may fork the repo (if not done already) and start working on the perticular task. Once the task is done, create a pull request and wait till it gets merged. Don't ping or assign reviewers.

## Before you start

As the project is very big and works on a lot of frameworks, you should learn the perticular thing(s) relavant to your task before you start working on the project.

### ReactJS

React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. Our website is built on this framework and hence you might like to go through the [documentation](https://reactjs.org/docs/getting-started.html) before you start working on the frontend of this project.

### NodeJs

Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. Our backend is written on Nodejs, so it's convenient to go through nodejs [documentation](https://nodejs.org/en/docs/) once if you're not familiar with it. Nodejs can be downloaded from [here](https://nodejs.org/en/download/). It's suggested to use a [node version manager](https://github.com/nvm-sh/nvm) to install and work with different versions of NodeJS in a single device.

### Azure services

Our API is based on microservice architecture and hosted on [Azure functions](https://azure.microsoft.com/en-in/services/functions/), so it's suggested to learn it if you don't have prior experience with it. Check out this [quickstart guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-get-started?pivots=programming-language-javascript)
in such case. Also check out Azure blob storage and cosmosDB as they were used along with Azure function in this project. Also get to learn about Azure static apps, as our whole project is hosted on it. you should understand the dev commands before you kickstart.

### MongoDB

We have used a mongoDB database for storing data from our application. You should get familiar with it in case yu want to contribute to the server side. Check out [mongoose](https://www.npmjs.com/package/mongoose) also as it's being used for the implementation of MongoDB database in our application.

### Development dependencies

Once you have nodejs and reactjs libraries installed, you can run the following code to install additional libraries used to work with Azure tools.

```cmd
> npm i -g concurrently @azure/static-web-apps-cli azure-functions-core-tools
```

## Run the application

### Install the dependencies

```cmd
> cd app
> npm i
> cd ../api
> npm i
> cd ..
```

### Run the website and API

Run this command and don't close this terminal

```cmd
> npm run start
```

### Run the proxy

Open a new terminal and run the following code

```cmd
> npm run start-swa
```

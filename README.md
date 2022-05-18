# API-ORM com Sequelize e Mysql
![nodeJs-version](https://img.shields.io/badge/nodejs-v17.0.0-blue)
![Sequelize-version](https://img.shields.io/badge/sequelize-%5E6.17.0-red)
![mysql-version](https://img.shields.io/badge/mysql-8.0.28--oracle-red)

API simulando uma escola de ingles, realizando o cadastro do usuario, turma e matricula.

## Tecnologias Utilizadas
- [**Express**](https://expressjs.com/pt-br/)
- [**mysql2**](https://github.com/sidorares/node-mysql2/tree/master/documentation)
- [**sequelize**](https://sequelize.org/)
- [**sequelize-cli**](https://sequelize.org/docs/v6/other-topics/migrations/)
- [**eslint**](https://eslint.org/)
- [**body-parser**](http://expressjs.com/en/resources/middleware/body-parser.html)
- [**jest**](https://jestjs.io/pt-BR/)

## Organização e estruturação do projeto

A API esta organizada e estruturada da seguinte forma:

```
    ├── README.md
    ├── docker-compose.yml
    ├── dockerfile
    ├── .sequelizerc
    ├── API ORM NodeJS.postman_collection.json
    ├── api
    |   ├── config
    |   |  ├── config.json
    |   ├── controllers
    |   |  ├── __mocks__
    |   |  |  ├── UsersControllers.js
    |   |  ├── ClassControllers.js
    |   |  ├── index.js
    |   |  ├── LevelControllers.js
    |   |  ├── UsersControllers.js
    |   ├── migrations
    |   |  ├── 20220303172158-create-users.js
    |   |  ├── 20220306184043-create-levels.js
    |   |  ├── 20220306184312-create-classes.js
    |   |  ├── 20220306184358-create-enrollment.js
    |   |  ├── 20220403172158-addColumn-deletedAt-users.js
    |   |  ├── 20220406184043-addColumn-deletedAt-levels.js
    |   |  ├── 20220406184312-addColumn-deletedAt-classes.js
    |   |  ├── 20220406184358-addColumn-deletedAt-enrollment.js
    |   ├── models
    |   |  ├── classes.js
    |   |  ├── enrollment.js
    |   |  ├── index.js
    |   |  ├── levels.js
    |   |  ├── users.js
    |   ├── routes
    |   |  ├── classesRoute.js
    |   |  ├── index.js
    |   |  ├── levelsRoute.js
    |   |  ├── usersRoute.js
    |   ├── seeders
    |   |  ├── 20220303180232-demo-users.js
    |   |  ├── 20220306195708-demo-levels.js
    |   |  ├── 20220306195930-demo-classes.js
    |   |  ├── 20220306200246-demo-enrollment.js
    |   ├── services
    |   |  ├── ClassServices.js
    |   |  ├── EnrollmentServices.js
    |   |  ├── index.js
    |   |  ├── LevelServices.js
    |   |  ├── Services.js
    |   |  ├── UsersServices.js
    |   ├── test
    |   |  ├── controllers
    |   |  |  ├── UsersControllers.test.js
    |   ├── index.js
```
## Executando a aplicação em ambiente de desenvolvimento

### Será necesario ter instalado na sua maquina:
```
Git
Docker
```

A aplicação poderá ser executada dentro do docker ou utilizando os scripts pelo o terminal

## Utilizando o Docker
na pasta raiz da aplicação execute o arquivo docker-compose.yml, que irá orquestrar a nossa aplicação, no terminal, entre na pasta e execute o comando docker-compose up

```sh
cd ./
docker-compose up
```
criando as imagens e subindo os contêineres:

- node-orm;
        - imagem:node-orm:1.0
- mysql-orm;
        - mysql:8.0.28-oracle

O banco irá subir vazio, precisando ser populado com os dados modelos, aṕos a criação dos volumes do mysql, acesse o container utilizando o comando:
```sh
cd ./
docker exec -it node-orm bash
```
Você ira entrar dentro do container node-orm pelo o terminal, dentro da pasta api, execute os dois comandos a seguir para popular o banco de dados, com os dados modelos:

criação das tabelas:
```sh
cd /home/node/app/api
npx sequelize-cli db:migrate
```

envio dos dados para as tabelas:
```sh
cd /home/node/app/api
npx sequelize-cli db:seed:all
```

a aplicação ira rodar na porta 8080.
# API-ORM com Sequelize e Mysql

## Executando a aplicação em ambiente de desenvolvimento

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


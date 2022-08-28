# company list , postgresSQL, typescript, nextjs, docker
## how to setup 

## Features

- Create company
- View created company
## Installation 

### Installation with docker
Requires [Docker](https://www.docker.com/) to run. 

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/vipin733/companylist.git
cd companylist
```

## RUNING PROJECT

Root folder
##### environment development 
```sh
cp .env.example .env
docker-compose up --build
```
##### deploy tables 
Open new tab terminal 
```sh
docker exec -u 0 companyweb npx prisma db push
docker exec -u 0 companyweb npx prisma generate
```
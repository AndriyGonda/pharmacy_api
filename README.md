## Pharmacy backend test API

## Instalation

1) change into project directory

2) make `npm install` 

3) create database and user in PostgreSQL

4) copy `.env.example` into `.env` and change database connection params

5) make migrations using following command: `npm run migrate`

6) apply migration for database: `npm run upgrade`

7) run web server in dev mode: `npm run dev`

8) Using Postman or another API Client make request: `GET http://localhost:5050/users`

9) Try to create a new user by request: `POST http://localhost:5050/users`
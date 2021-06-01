## Creating a new role

    postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';

We want me to be able to create a database.

    postgres=# ALTER ROLE me CREATEDB;

\du gives list all roles/users.

    me          | Create DB                           | {}
    postgres    | Superuser, Create role, Create DB   | {}

Now we want to create a database from the me user. Exit from the default session with \q for quit.

    postgres=# \q

This time select user me

Instead of postgres=#, our prompt shows postgres=> now, meaning we’re no longer logged in as a superuser.

## Creatng database

    postgres=> CREATE DATABASE api;

\l

                                                List of databases
        Name    |  Owner   | Encoding |      Collate       |       Ctype        |   Access privileges
        -----------+----------+----------+--------------------+--------------------+-----------------------
        api       | me       | UTF8     | English_India.1252 | English_India.1252 |
        postgres  | postgres | UTF8     | English_India.1252 | English_India.1252 |
        template0 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
                |          |          |                    |                    | postgres=CTc/postgres
        template1 | postgres | UTF8     | English_India.1252 | English_India.1252 | =c/postgres          +
                |          |          |                    |                    | postgres=CTc/postgres
        test      | postgres | UTF8     | English_India.1252 | English_India.1252 |

Connect to the new api database with me using the \c (connect) command.

    postgres=> \c api
    You are now connected to database "api" as user "me".
    api=>

## Creating a table

    api=>CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    );

## Connecting to a Postgres database from Node.js

We use node-postgres(pg) module to create a pool of connections. This way we don’t have to open a client and close it every time we make a query.

Create a file called queries.js and set up the configuration of your PostgreSQL connection.

    const Pool = require('pg').Pool
    const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
    })

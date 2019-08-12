# soulprovidr.fm



## Getting started

Before you can run the API locally, you must first ensure the environment variables in the `.env` file are defined correctly.

### Docker

The following services are packaged in `docker-compose.yml`:

1. **PostgreSQL** (`5432`): Development database server.
1. **Adminer** (`9000`): Database administration GUI.

To run:

```
$ cd soulprovidr.fm
$ docker-compose up -d
```

### Adminer

To log in, use the credentials specified in the project's `.env` file. Use the name of the database service defined in `docker-compose.yml` as the "DB" value (`db`, by default).

## Development
Run the API with the following command:

```
$ yarn && yarn start
```

### Migrations

To create a migration, run the following command:

```
$ npx knex migrate:make <name>
```

To run all unapplied migrations, run the following command:

```
$ npx knex migrate:up
```

To undo the last migration:

```
$ npx knex migrate:down
```

---

## Endpoints

### Authentication

#### `GET /auth/current`

Fetch the user information associated with the current session.

##### Request
````
<Empty>
````

##### Response
````
200 OK {
  id : Integer,       // The user's ID.
  email : String,     // The user's email address.
  firstName : String, // The user's first name.
  lastName : String,  // The user's last name.
}
````

#### `POST /auth/register`

Creates a new user in the database.

##### Request
````
{
  email : String,     // The user's email address.
  firstName : String, // The user's first name.
  lastName : String,  // The user's last name.
  password : String   // The user's password.
}
````

##### Response
````
201 Created {
  id : Integer,       // The user's ID.
  email : String,     // The user's email address.
  firstName : String, // The user's first name.
  lastName : String,  // The user's last name.
}
````

#### `POST /auth/login`

Authenticates a user and sets a secure cookie on the client.

##### Request
````
{
  email : String,     // The user's email address.
  password : String   // The user's password.
}
````

##### Response
````
200 OK {
  id : Integer,       // The user's ID.
  email : String,     // The user's email address.
  firstName : String, // The user's first name.
  lastName : String,  // The user's last name.
}
````

#### `GET /auth/logout`

Ends a user's session. (i.e. unsets their session cookie).

##### Request
````
<Empty>
````

##### Response
````
200 OK
````
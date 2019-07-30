# soulprovidr.fm

## Docker

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

## API

### Getting started

Before you can run the API locally, you must first ensure the environment variables in the `.env` file are defined correctly.

Run the API with the following commands:

```
$ cd soulprovidr.fm/api
$ node src
```

### Migrations

To create a migration, first `cd` into the `api` directory, then run the following command:

```
$ npx knex make:migration <name>
```

To run all unapplied migrations, run the following command:

```
$ npx knex migrate:up
```

To undo the last migration:

```
$ npx knex migrate:down
```
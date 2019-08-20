# Treque<br><small>Service Exchange Platform</small>

## Prerequisites & Software

- [Docker](https://www.docker.com/)
- [Humble CLI](https://github.com/marcopeg/humble-cli) (*)

(*) In order to install `Humble CLI` open a `Terminal` and paste the following instruction.
Note that you will be asked for your system password, this is necessary to create a few symlinks
and have the `humble` command available in your Mac.

```bash
bash <(curl -s https://raw.githubusercontent.com/marcopeg/humble-cli/master/remote-setup.sh)
```

The following software is good to have but not really mandatory:

- [NVM](https://github.com/nvm-sh/nvm) - Node Version Manager, to run the sofware without Docker
- [Postico](https://eggerapps.at/postico/) - PostgreSQL database client

## How To Run The Project

#### First Time Setup

Create a file named `.env.local` in the project's root folder and paste the following configuration:

```bash
PG_PORT=5432
PG_USERNAME=postgres
PG_PASSWORD=postgres
PG_DATABASE=postgres
JWT_SECRET=xxx
```

**NOTE:** You can change the values as you want, this is just some common defaults.

#### Run Production

Open a `Terminal` and run:

```bash
humble prod
```

This will build the project and run it in production mode. As close as possible to the software that
will be executed in the real servers.

**NOTE:** depending on your computer performances, this process may take up to a couple of minutes
to complete. Take a cup of coffee, a beer... just relax.

When everything is done, you should be able to run the app at:

```bash:
http://localhost:8080
```

When you want to stop the project, just kill the program with `Ctrl + C`, then run `make unprod` to
stop all the related services.


#### Run Development

Open a `Terminal` and run:

```bash
humble dev
```

This will run the project in development mode, which is quite heavier than the production as the solution
will be constantly updated based on changes in the source code.

**NOTE:** depending on your computer performances, this process may take up to a couple of minutes
to complete. Take a cup of coffee, a beer... just relax.

When everything is done, you should be able to run the app at:

```bash:
# App's UI
http://localhost:3000

# App's API
http://localhost:3000/api
```

When you want to stop the project, just kill the program with `Ctrl + C`, then run `make undev` to
stop all the related services.


#### Run the Styleguide

Open a `Terminal` and run:

```bash
humble dev-styleguide
```

This will run the **dumb components** only. It's a development tool that let us focus on the pure UI
work, without the need for the whole application.

**NOTE:** depending on your computer performances, this process may take up to a couple of minutes
to complete. Take a cup of coffee, a beer... just relax.

When everything is done, you should be able to run the app at:

```bash:
http://localhost:6060
```

When you want to stop the project, just kill the program with `Ctrl + C`, then run `make undev` to
stop all the related services.
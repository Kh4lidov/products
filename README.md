# Products Project
<img src="https://github.com/Kh4lidov/products/blob/main/resources/images/logo.png" align="left" height="48" width="48" >

Welcome to the Products project! This repository contains the source code for the Product event management system. You can use this README to set up the project locally for development.

## Local Development

Follow these steps to set up the project locally for development:

### 1. Start Docker Containers

First, make sure you have Docker installed on your system. Then, run the following command to start the Docker containers:

```bash
docker-compose up -d
```

### 2. Install Composer Dependencies

Once the Docker containers are up and running, install the PHP dependencies using Composer:

```bash
docker-compose exec app composer install
```

### 3. Run Database Migrations

To set up the database, run the following command:

```bash
docker-compose exec app php artisan migrate
```

### 4. Install JavaScript Dependencies

Install the JavaScript dependencies using Yarn:

```bash
yarn install
```

### 5. Build Frontend Assets

Compile the frontend assets:

```bash
yarn dev
```

Your local development environment should now be set up and ready to go!

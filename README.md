
## Description

After reading the NestJS document, I think it would be a good idea to learn the official course which might be more dense and contains best practices while the document is trying to demonstrate everything in detail. 

## Hint

```bash
# Run the app in Development Mode (Watch mode)
$ npm run start:dev

# Generate controller
$ nest g co

# Generate controller in specified path in dry run mode
$ nest generate controller modules/abc --dry-run

# Generate customer service
$ nest g s
$ nest generate service

# Generate a module
$ nest g module coffees

# Generate a dto
$ nest g class coffees/dto/dtoname.dto --no-spec

# Validation pipes need class-validator and class-transformer packages
$ npm i class-validator class-transformer

# Nest common transformations to reduce redundancy 
$ npm i @nestjs/mapped-types

# Run docker-compose in detached mode
$ docker-compose up -d

# Install TypeORM dependency for PostgreSQL
$ npm i @nestjs/typeorm typeorm pg

# Create a TypeOrm Migration
$ npx typeorm migration:create -n CoffeeRefactor

# Run migrations
# 1. Compile the project
$ npm run build
# 2. Create a migration or let TypeOrm generate a migration for you
$ npx typeorm migration:create -n CoffeeRefactor
$ npx typeorm migration:generate -n SchemaSync
# 3 Run migrations
$ npx typeorm migration:run
# 4. Revert migrations
$ npx typeorm migration:revert

# Dependencies for schema validation.
# use import * as Joi from '@hapi/joi'; instead of import Joi from "@hapi/joi";
# if you have TypeError: Cannot read property 'object' of undefined  
$ npm install @hapi/joi
$ npm install --save-dev @types/hapi__joi

# Generate a filter
$ nest g filter common/filters/http-exception

# Generate a guard
$ nest g guard common/guards/api-key

# Generate an interceptor
$ nest g interceptor common/interceptors/wrap-response

# Generate a pipe
$ nest g pipe common/pipes/parse-int

# Generate a middleware
$ nest g middleware common/middleware/logging

# Install swagger-ui-express dependency
$npm i @nestjs/swagger swagger-ui-express

# Run unit tests
$ npm run test 

# Run unit tests + collecting testing coverage
$ npm run test:cov

# Run e2e tests
$ npm run test:e2e
```



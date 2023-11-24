<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="150" alt="Nest Logo" /></a>
  <a href="https://exa.unicen.edu.ar/" target="blank"><img src="https://git.exa.unicen.edu.ar/uploads/-/system/appearance/logo/1/color_transparente_750.png" width="500" alt="FCEx Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

[![codecov](https://codecov.io/gh/PieresAgustin/Tienda-Web-NestJS/graph/badge.svg?token=Y3GI6OWH21)](https://codecov.io/gh/PieresAgustin/Tienda-Web-NestJS)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0eb545d4a38d4d7ba058c9f9e40bee06)](https://app.codacy.com/gh/PieresAgustin/Tienda-Web-NestJS/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Kubernetes

Para realizar el deploy agregar un secret con la password de la Database.

```bash
$ kubectl create secret generic db-pass --from-literal=password="<secreto>"
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# development with watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints of the API

### Brands

`GET /brands/`

Retrieve all Brands.

- Response

  ```json
   {
    "brand_id": "Number",
    "marca": "Brand Name"
   }
    // ...
  ```

`GET /brands/id`

Retrieve a single Brand.

- Response:

  ```json
  {
    "brand_id": "Number",
    "marca": "Brand Name",
  }
  ```

`POST /brands/`

Creates a new Brand.

- Request body:

  ```json
  {
    "id": "Number",
    "marca": "Brand Name",
  }
  ```

- Response:

  ```json
  {
    "id": "Number",
    "marca": "Brand Name",
  }
  ```

`DELETE /brand/id`

Deletes a Brand with no response if it exist.


### Products

`GET /products/`

Retrieve all Products.

- Response

  ```json
    {
      "id":"Number",
      "name":"String",
      "type":"String",
      "waist":"Number",
      "color":"String",
      "stock":"Number",
      "price":"Number",
      "image":"String",
      "quantity":"Number",
      "clearance":"Boolean",
      "brand":{
        "brand_id":"Number",
        "marca":"String"
        }
      }
    // ...
  ```

`GET /products/id`

Retrieve a single Product.

- Response:

  ```json
    {
      "id":"Number",
      "name":"String",
      "type":"String",
      "waist":"Number",
      "color":"String",
      "stock":"Number",
      "price":"Number",
      "image":"String",
      "quantity":"Number",
      "clearance":"Boolean",
      "brand":{
        "brand_id":"Number",
        "marca":"String"
        }
    }
  ```

`POST /products/`

Creates a new Product.

- Request body:

  ```json
  {
    "name":"String",
    "type":"String",
    "waist":"Number",
    "color":"String",
    "stock":"Number",
    "price":"Number",
    "image":"String",
    "quantity":"Number",
    "clearance": "Boolean",
    "idmarca": "Number"
  }
  ```

- Response:

  ```json
  {
    "id": "Number",
    "type": "String",
    "name": "String",
    "waist": "40",
    "color": "String",
    "stock": "Number",
    "price": "Number",
    "image": "String",
    "quantity": "Number",
    "clearance": "Boolean",
  }
  ```

`DELETE /products/id`

Deletes a Product with no response if it exist.
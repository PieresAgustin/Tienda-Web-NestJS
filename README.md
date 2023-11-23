<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

[![codecov](https://codecov.io/gh/PieresAgustin/Tienda-Web-NestJS/graph/badge.svg?token=Y3GI6OWH21)](https://codecov.io/gh/PieresAgustin/Tienda-Web-NestJS)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/0eb545d4a38d4d7ba058c9f9e40bee06)](https://app.codacy.com/gh/PieresAgustin/Tienda-Web-NestJS/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Build and Deploy](https://github.com/PieresAgustin/Tienda-Web-NestJS/actions/workflows/new-release.yml/badge.svg)](https://github.com/PieresAgustin/Tienda-Web-NestJS/actions/workflows/new-release.yml)
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Kubernetes

Para realizar el deploy agregar un secret con la password de la Database.

```bash
$ kubectl create secret generic db-pass \
  --from-literal=password="<secreto>"
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
# Tienda-Web

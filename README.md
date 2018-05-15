# dv4Football MASTER - Angular 6 Demo project

This repo contains Angular 6 front end demo application. The complete stack consits of angular 6 (front end), nodejs and graphQL (backend api), and finally firebase for hosting. Backend api is implemented as firebase function (note: as api makes external calls to other api's, payed firebase subscription is required). For more info about backend api (nodejs & graphQL) see project repo dv4football-node.

Quick reference about the stack:

- Angular 6 front-end: uses angular cli, angular material with custom scss theme. I included bootstrap 4 grid system to cover basic 'responsive' bits, though during the course of a project I expect additional media queries will be implemented to show off real custom approach.
- GraphQL backend api: using node.js. Front-end is connect using angular http client and sipmly sending 'pre-caned' GraphQL queries as POST requests.
- Firebase:
  - hosting: the front-end is hosted using firebase hosting service.
  - functions: GraphQL node backend is deployed as firebase function.

## Branches

- master: latest deployed version
- dev: development of next version
- firebase: firebase functions for graphQL

## Node scripts

Folowing scripts are defined in package.json

- `npm run dev`: runs app in dev mode using dev environement and dev build definitions (see angular.json)
- `npm run prod`: runs app in dev mode using dev environement and dev build definitions (see angular.json)
- `npm run build`: creates production build using production env and  definitions (see angular.json)
- `npm run deploy`: run firebase cli to deploy project.

## Environments

The project has only two environments and build configurations. These can be further extended when needed

- dev: development environment and build. Environement variables are definited in environment.dev.ts file and build switches in angular.json. Dev build has only extract css and sourcemaps set on true. Also graphQL functions uses localhost instead of online version.
- prod: production environment and build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

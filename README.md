# RdfGraphExplorer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Build

```shell
docker build -t rdf-graph-explorer .
```

## Run

```shell
docker run -it -p 8081:80 rdf-graph-explorer
```

At the moment rdf-graph-explorer use by default the SPARQL endpoint http://graphdb.dumontierlab.com/repositories/ncats-red-kg, using precomputed HCLS statistics.

The SPARQL endpoint can be changed in `src/sparql.service.ts`

## Development server

```shell
npm install
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app *should* automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

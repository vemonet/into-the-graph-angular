# RdfGraphExplorer

**DEPRECATED**: rewritten in ReactJS at [MaastrichtU-IDS/into-the-graph](https://github.com/MaastrichtU-IDS/into-the-graph).

Lightweight RDF linked data browser supporting graphs. Written with [Angular](https://github.com/angular/angular-cli) (cli version 7.3.8).

## Clone

```bash
git clone https://github.com/MaastrichtU-IDS/into-the-graph-angular.git
cd into-the-graph-angular
```

## Build

```bash
docker build -t into-the-graph-angular .
```

## Run

```bash
docker run -it -p 8081:80 into-the-graph-angular
```

At the moment into-the-graph use by default the SPARQL endpoint http://graphdb.dumontierlab.com/repositories/ncats-red-kg, using precomputed [HCLS statistics](https://www.w3.org/TR/hcls-dataset/).

The SPARQL endpoint can be changed in [src/environments/environment.ts](https://github.com/MaastrichtU-IDS/into-the-graph/blob/master/src/environments/environment.prod.ts) and [src/environments/environment.prod.ts](https://github.com/MaastrichtU-IDS/into-the-graph/blob/master/src/environments/environment.ts)

The HCLS statistics can easily be computed on any triplestore by just providing the triplestore insert credentials and the graph URI to a Docker container. See [this documentation](https://github.com/MaastrichtU-IDS/data2services-transform-repository/tree/master/sparql/compute-hcls-stats). 

## Development server

```shell
npm install
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/). The app *should* automatically reload if you change any of the source files.

### Installation

```bash
npm install -g @angular/cli
npm rebuild node-sass
```



## Deploy on GitHub Pages

To push only `dist` folder to `gh-pages` branch to deploy a webapp

```shell
# Create and update
git subtree push --prefix dist/into-the-graph-angular origin gh-pages

# Delete branch
git push origin --delete gh-pages
```

https://medium.com/front-end-weekly/angularjs-github-pages-the-easy-way-7b9568b7b07c



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

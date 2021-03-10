# AngularAuth

This is a simple Angular app where it autheninticates user using fake backend users object. Once user is authenticated, it will take them to the guarded admin page and users will be presented with list of products from fake backend source, stored in NGRX/store. This app is only utilizing reducer since it only needs to retrieve the initial state of the content. There are no actions just yet. The style is handled by custom configurable SCSS. This site is WCAG 2.0 Level AA compliant as well. 

https://angular-authenti-guard.vercel.app/

## Stacks

Angular + Fake Backend + NGRX/Store (reducer only) + Configurable SCSS with mixins, function, etc. + WCAG 2.0 Level AA compliant.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

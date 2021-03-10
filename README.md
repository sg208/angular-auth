# AngularAuth

This is a simple Angular app where it autheninticates user using fake backend users object. Once user is authenticated, it will take them to the guarded admin page and users will be presented with list of products from fake backend source, stored in NGRX/store. This app is only utilizing reducer since it only needs to retrieve the initial state of the content. There are no actions just yet. The style is handled by custom configurable SCSS. This site is WCAG 2.0 Level AA compliant as well. 

## Ingredients

Angular + Fake Backend + NGRX/Store (reducer only) + Configurable SCSS with mixins, function, etc. + WCAG 2.0 Level AA compliant, hosted on Vercel (Ci/CD).

## Sample app

https://angular-authenti-guard.vercel.app/

## Backlog items

- PWA
- Consume REST for products and users

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

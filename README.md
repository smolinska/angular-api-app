# AngularApiApp

This is an example project using YouTube API.
For videos storage was used Ngrx store and for saving favourite videos was used localStorage (because of lack of authorisation).

To download and run this project run:

```
git clone git@github.com:smolinska/angular-api-app.git
cd angular-api-app
npm install
ng serve
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## API key
Before searching for videos you need to generate YouTube Data API v3 key [here](https://developers.google.com/youtube/v3/getting-started).
Next add key to environments file (`apiKey`).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

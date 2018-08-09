# angular-libs
This project contains a collection of Angular core libraries. This project is deployed to the ens (likelly to the angular-core), so you can require angular libraries (etc...) directly into the frontend without building duplicated libraries into your dapps.

This project exports the following libraries for you:
  - @angular/animations
  - @angular/common
  - @angular/common/locales/de
  - @angular/common/locales/en
  - @angular/common/locales/fr
  - @angular/core
  - @angular/forms
  - @angular/http
  - @angular/platform-browser
  - @angular/platform-browser-dynamic
  - @angular/platform-browser/animations
  - @angular/router
  - @ionic-native/camera
  - @ionic-native/file
  - @ionic-native/file-path
  - @ionic-native/qr-scanner
  - @ionic-native/splash-screen
  - @ionic-native/status-bar
  - @ionic-native/transfer
  - @ngx-translate/core
  - @zxing/library
  - @zxing/ngx-scanner
  - ionic-angular
  - ionic-tags-input
  - ng-circle-progress
  - rxjs/BehaviorSubject
  - rxjs/Observable
  - rxjs/Subscription

## Usage
```ts
...
import {
  NgModule, ErrorHandler, enableProdMode,   // @angular/core
  CommonModule, registerLocaleData,         // @angular/common
  RouterModule, Routes, RouteReuseStrategy, // @angular/router
  FormsModule,                              // @angular/forms
  IonicModule, IonicApp,                    // ionic-angular
  TranslateModule, TranslateService,        // @ngx-translate/core
  BrowserAnimationsModule,                  // @angular/platform-browser/animations'
  NgCircleProgressModule,                   // ng-circle-progress
  IonTagsInputModule,                       // ionic-tags-input
  ZXingScannerModule,                       // qr-code-scanner module
  Camera,                                   // @ionic-native/camera
  QRScanner,                                // @ionic-native/qr-scanner
  ...
} from 'angular-libs';
...
```

## Installation
```sh
npm i angular-libs
```

## Loading
- typescript

tsconfig.json
```json
{
  "compilerOptions": {
    ...,
    "paths": {
      "angular-libs": [
        "../node_modules/@evan.network/ui-angular-core/dist/angularlibs.js"
      ]
    }
    ...
  }
}
```
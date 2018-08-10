/*
  Copyright (C) 2018-present evan GmbH.

  This program is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License, version 3,
  as published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License along with this program.
  If not, see http://www.gnu.org/licenses/ or write to the

  Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA, 02110-1301 USA,

  or download the license from the following URL: https://evan.network/license/

  You can be released from the requirements of the GNU Affero General Public License
  by purchasing a commercial license.
  Buying such a license is mandatory as soon as you use this software or parts of it
  on other blockchains than evan.network.

  For more information, please contact evan GmbH at this address: https://evan.network/license/
*/

import { System } from 'dapp-browser';

System.map['@angular/core'] = 'angularlibs.evan!dapp-content';
System.map['@angular/compiler'] = 'angularlibs.evan!dapp-content';
System.map['@angular/platform-browser'] = 'angularlibs.evan!dapp-content';
System.map['@angular/common'] = 'angularlibs.evan!dapp-content';
System.map['@angular/forms'] = 'angularlibs.evan!dapp-content';
System.map['rxjs/BehaviorSubject'] = 'angularlibs.evan!dapp-content';
System.map['rxjs/Observable'] = 'angularlibs.evan!dapp-content';
System.map['rxjs/Subject'] = 'angularlibs.evan!dapp-content';
System.map['rxjs'] = 'angularlibs.evan!dapp-content';
export {
  BrowserModule,
  DomSanitizer
} from '@angular/platform-browser';

export {
  platformBrowserDynamic
} from '@angular/platform-browser-dynamic';

export {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';

export {
  AfterViewInit,
  AfterContentInit,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  AnimationEntryMetadata,
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Compiler,
  CompilerFactory,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ContentChildren,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  enableProdMode,
  ErrorHandler,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgModuleRef,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Pipe,
  PipeTransform,
  QueryList,
  Renderer,
  SimpleChange,
  SimpleChanges,
  SkipSelf,
  TemplateRef,
  Type,
  Version,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

export {
  CommonModule,
  Location,
  registerLocaleData,
} from '@angular/common';

export {
  RouterModule,
  Routes,
  Route,
  Router,
  ActivatedRoute,
  RouterEvent,
  LoadChildrenCallback,
  UrlTree,

  // router.events
  NavigationStart,
  RoutesRecognized,
  GuardsCheckStart,
  ChildActivationStart,
  GuardsCheckEnd,
  ResolveStart,
  ResolveEnd,
  ActivationEnd,
  ChildActivationEnd,
  NavigationEnd,
  CanActivate,
  ActivatedRouteSnapshot,
  RouteReuseStrategy,
  DetachedRouteHandle,
  provideRoutes
} from '@angular/router';

export {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from '@angular/animations';

export {
  FormsModule,
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';

export {
  SplashScreen
} from '@ionic-native/splash-screen';

export {
  StatusBar
} from '@ionic-native/status-bar';

export { File } from '@ionic-native/file';
export { Transfer } from '@ionic-native/transfer';
export { FilePath } from '@ionic-native/file-path';
export { Camera } from '@ionic-native/camera';
export { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

export {
  Platform,
  IonicApp,
  IonicErrorHandler,
  IonicModule,
  NavController,
  NavParams,
  IonicPageModule,
  App,
  Alert,
  AlertController,
  ToastController,
  Slides,
  MenuController,
  PopoverController,
  ViewController,
  Config,
} from 'ionic-angular';

export {
  Observable
} from 'rxjs/Observable';

export {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

export {
  Subscription
} from 'rxjs/Subscription';

export {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

export {
  NgCircleProgressModule
} from 'ng-circle-progress';

export {
  IonTagsInputModule
} from 'ionic-tags-input';

export {
  Http,
  Response,
  RequestOptions,
  Headers,
  HttpModule
} from '@angular/http';

export {
  ZXingScannerModule,
  ZXingScannerComponent
} from '@zxing/ngx-scanner';

export {
  Result
} from '@zxing/library';

// import languages

import * as languages from './languages';
export {
  languages
};

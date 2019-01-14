import { HostListener, Directive, ElementRef, Injectable, defineInjectable, Optional, inject, Component, ChangeDetectorRef, InjectionToken, NgZone, ApplicationRef, Injector, EventEmitter, ViewContainerRef, ComponentFactoryResolver, Attribute, Output, ViewChild, ContentChild, TemplateRef, ChangeDetectionStrategy, IterableDiffers, APP_INITIALIZER, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Location, LocationStrategy, CommonModule } from '@angular/common';
import { NavigationStart, Router, PRIMARY_OUTLET, ChildrenOutletContexts, ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, fromEvent } from 'rxjs';
import { __awaiter } from 'tslib';
import { defineCustomElements } from '@ionic/core/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
        setIonicClasses(this.el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    handleChangeEvent(value) {
        if (value !== this.lastValue) {
            this.lastValue = value;
            this.onChange(value);
        }
        setIonicClasses(this.el);
    }
    /**
     * @return {?}
     */
    _handleBlurEvent() {
        this.onTouched();
        setIonicClasses(this.el);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.el.nativeElement.disabled = isDisabled;
    }
}
ValueAccessor.propDecorators = {
    _handleBlurEvent: [{ type: HostListener, args: ['ionBlur',] }]
};
/**
 * @param {?} element
 * @return {?}
 */
function setIonicClasses(element) {
    requestAnimationFrame(() => {
        /** @type {?} */
        const classList = ((/** @type {?} */ (element.nativeElement))).classList;
        classList.remove('ion-valid', 'ion-invalid', 'ion-touched', 'ion-untouched', 'ion-dirty', 'ion-pristine');
        for (let i = 0; i < classList.length; i++) {
            /** @type {?} */
            const item = classList.item(i);
            if (item !== null && startsWith(item, 'ng-')) {
                classList.add(`ion-${item.substr(3)}`);
            }
        }
    });
}
/**
 * @param {?} input
 * @param {?} search
 * @return {?}
 */
function startsWith(input, search) {
    return input.substr(0, search.length) === search;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BooleanValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
        setIonicClasses(this.el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonChange(value) {
        this.handleChangeEvent(value);
    }
}
BooleanValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-checkbox,ion-toggle',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
BooleanValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
BooleanValueAccessor.propDecorators = {
    _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.checked'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumericValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonChange(value) {
        this.handleChangeEvent(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        super.registerOnChange(value => {
            fn(value === '' ? null : parseFloat(value));
        });
    }
}
NumericValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input[type=number]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
NumericValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
NumericValueAccessor.propDecorators = {
    _handleIonChange: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RadioValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleIonSelect(value) {
        this.handleChangeEvent(value);
    }
}
RadioValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-radio',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
RadioValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
RadioValueAccessor.propDecorators = {
    _handleIonSelect: [{ type: HostListener, args: ['ionSelect', ['$event.target.checked'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleChangeEvent(value) {
        this.handleChangeEvent(value);
    }
}
SelectValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-range, ion-select, ion-radio-group, ion-segment, ion-datetime',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SelectValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
SelectValueAccessor.propDecorators = {
    _handleChangeEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TextValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _handleInputEvent(value) {
        this.handleChangeEvent(value);
    }
}
TextValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'ion-input:not([type=number]),ion-textarea,ion-searchbar',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: TextValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
TextValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
TextValueAccessor.propDecorators = {
    _handleInputEvent: [{ type: HostListener, args: ['ionChange', ['$event.target.value'],] }]
};

var PLATFORMS_MAP={ipad:isIpad,iphone:isIphone,ios:isIOS,android:isAndroid,phablet:isPhablet,tablet:isTablet,cordova:isCordova,capacitor:isCapacitorNative,electron:isElectron,pwa:isPWA,mobile:isMobile,desktop:isDesktop,hybrid:isHybrid};function getPlatforms(t){return setupPlatforms(t)}function isPlatform(t,i){return getPlatforms(t).includes(i)}function setupPlatforms(t){t.Ionic=t.Ionic||{};var i=t.Ionic.platforms;if(null==i){i=t.Ionic.platforms=detectPlatforms(t);var n=t.document.documentElement.classList;i.forEach(function(t){return n.add("plt-"+t)});}return i}function detectPlatforms(t){return Object.keys(PLATFORMS_MAP).filter(function(i){return PLATFORMS_MAP[i](t)})}function isIpad(t){return testUserAgent(t,/iPad/i)}function isIphone(t){return testUserAgent(t,/iPhone/i)}function isIOS(t){return testUserAgent(t,/iPad|iPhone|iPod/i)}function isAndroid(t){return testUserAgent(t,/android|sink/i)}function isPhablet(t){var i=t.innerWidth,n=t.innerHeight,e=Math.min(i,n),r=Math.max(i,n);return e>390&&e<520&&r>620&&r<800}function isTablet(t){var i=t.innerWidth,n=t.innerHeight,e=Math.min(i,n),r=Math.max(i,n);return e>460&&e<820&&r>780&&r<1400}function isMobile(t){return matchMedia(t,"(any-pointer:coarse)")}function isDesktop(t){return !isMobile(t)}function isHybrid(t){return isCordova(t)||isCapacitorNative(t)}function isCordova(t){return !!(t.cordova||t.phonegap||t.PhoneGap)}function isCapacitorNative(t){var i=t.Capacitor;return !(!i||!i.isNative)}function isElectron(t){return testUserAgent(t,/electron/)}function isPWA(t){return t.matchMedia("(display-mode: standalone)").matches}function testUserAgent(t,i){return i.test(t.navigator.userAgent)}function matchMedia(t,i){return t.matchMedia(i).matches}

var LIFECYCLE_WILL_ENTER="ionViewWillEnter",LIFECYCLE_DID_ENTER="ionViewDidEnter",LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";

// Ionic: ES Module

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Platform {
    constructor() {
        /**
         * @hidden
         */
        this.backButton = (/** @type {?} */ (new Subject()));
        /**
         * The pause event emits when the native platform puts the application
         * into the background, typically when the user switches to a different
         * application. This event would emit when a Cordova app is put into
         * the background, however, it would not fire on a standard web browser.
         */
        this.pause = new Subject();
        /**
         * The resume event emits when the native platform pulls the application
         * out from the background. This event would emit when a Cordova app comes
         * out from the background, however, it would not fire on a standard web browser.
         */
        this.resume = new Subject();
        /**
         * The resize event emits when the browser window has changed dimensions. This
         * could be from a browser window being physically resized, or from a device
         * changing orientation.
         */
        this.resize = new Subject();
        this.backButton.subscribeWithPriority = function (priority, callback) {
            return this.subscribe(ev => {
                ev.register(priority, callback);
            });
        };
        proxyEvent(this.pause, document, 'pause');
        proxyEvent(this.resume, document, 'resume');
        proxyEvent(this.backButton, document, 'ionBackButton');
        proxyEvent(this.resize, window, 'resize');
        /** @type {?} */
        let readyResolve;
        this._readyPromise = new Promise(res => { readyResolve = res; });
        if (((/** @type {?} */ (window)))['cordova']) {
            document.addEventListener('deviceready', () => {
                readyResolve('cordova');
            }, { once: true });
        }
        else {
            (/** @type {?} */ (readyResolve))('dom');
        }
    }
    /**
     * \@description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * \@Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log('I am an iOS device!');
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | electron        | in Electron on a desktop device.   |
     * | pwa             | as a PWA app.   |
     * | mobile          | on a mobile device.                |
     * | desktop         | on a desktop device.               |
     * | hybrid          | is a cordova or capacitor app.     |
     *
     * @param {?} platformName
     * @return {?} returns true/false based on platform.
     */
    is(platformName) {
        return isPlatform(window, platformName);
    }
    /**
     * \@description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * \@Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     * @return {?} the array of platforms
     */
    platforms() {
        return getPlatforms(window);
    }
    /**
     * @return {?}
     */
    ready() {
        return this._readyPromise;
    }
    /**
     * @return {?}
     */
    get isRTL() {
        return document.dir === 'rtl';
    }
    /**
     * Get the query string parameter
     * @param {?} key
     * @return {?}
     */
    getQueryParam(key) {
        return readQueryParam(window.location.href, key);
    }
    /**
     * @return {?}
     */
    isLandscape() {
        return !this.isPortrait();
    }
    /**
     * @return {?}
     */
    isPortrait() {
        return window.matchMedia('(orientation: portrait)').matches;
    }
    /**
     * @param {?} expression
     * @return {?}
     */
    testUserAgent(expression) {
        return navigator.userAgent.indexOf(expression) >= 0;
    }
    /**
     * @return {?}
     */
    url() {
        return window.location.href;
    }
    /**
     * @return {?}
     */
    width() {
        return window.innerWidth;
    }
    /**
     * @return {?}
     */
    height() {
        return window.innerHeight;
    }
}
Platform.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
Platform.ctorParameters = () => [];
/** @nocollapse */ Platform.ngInjectableDef = defineInjectable({ factory: function Platform_Factory() { return new Platform(); }, token: Platform, providedIn: "root" });
/**
 * @param {?} url
 * @param {?} key
 * @return {?}
 */
function readQueryParam(url, key) {
    key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    /** @type {?} */
    const regex = new RegExp('[\\?&]' + key + '=([^&#]*)');
    /** @type {?} */
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[1].replace(/\+/g, ' ')) : null;
}
/**
 * @template T
 * @param {?} emitter
 * @param {?} el
 * @param {?} eventName
 * @return {?}
 */
function proxyEvent(emitter, el, eventName) {
    el.addEventListener(eventName, (ev) => {
        // ?? cordova might emit "null" events
        emitter.next(ev != null ? (/** @type {?} */ (((/** @type {?} */ (ev))).detail)) : undefined);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavController {
    /**
     * @param {?} platform
     * @param {?} location
     * @param {?=} router
     */
    constructor(platform, location, router) {
        this.location = location;
        this.router = router;
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        this.guessDirection = 'forward';
        this.lastNavId = -1;
        // Subscribe to router events to detect direction
        if (router) {
            router.events.subscribe(ev => {
                if (ev instanceof NavigationStart) {
                    /** @type {?} */
                    const id = (ev.restoredState) ? ev.restoredState.navigationId : ev.id;
                    this.guessDirection = id < this.lastNavId ? 'back' : 'forward';
                    this.guessAnimation = !ev.restoredState ? this.guessDirection : undefined;
                    this.lastNavId = this.guessDirection === 'forward' ? ev.id : id;
                }
            });
        }
        // Subscribe to backButton events
        platform.backButton.subscribeWithPriority(0, () => this.goBack());
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateForward(url, options = {}) {
        this.setDirection('forward', options.animated, options.animationDirection);
        this.navigate(url, options);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateBack(url, options = {}) {
        this.setDirection('back', options.animated, options.animationDirection);
        this.navigate(url, options);
    }
    /**
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    navigateRoot(url, options = {}) {
        this.setDirection('root', options.animated, options.animationDirection);
        this.navigate(url, options);
    }
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    navigate(url, options) {
        if (Array.isArray(url)) {
            return (/** @type {?} */ (this.router)).navigate(url, options);
        }
        else {
            return (/** @type {?} */ (this.router)).navigateByUrl(url, options);
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    goBack(options = { animated: true, animationDirection: 'back' }) {
        this.setDirection('back', options.animated, options.animationDirection);
        return this.location.back();
    }
    /**
     * @param {?} direction
     * @param {?=} animated
     * @param {?=} animationDirection
     * @return {?}
     */
    setDirection(direction, animated, animationDirection) {
        this.direction = direction;
        this.animated = getAnimation(direction, animated, animationDirection);
    }
    /**
     * @return {?}
     */
    consumeTransition() {
        /** @type {?} */
        let direction = 'root';
        /** @type {?} */
        let animation;
        if (this.direction === 'auto') {
            direction = this.guessDirection;
            animation = this.guessAnimation;
        }
        else {
            animation = this.animated;
            direction = this.direction;
        }
        this.direction = DEFAULT_DIRECTION;
        this.animated = DEFAULT_ANIMATED;
        return {
            direction,
            animation
        };
    }
}
NavController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
NavController.ctorParameters = () => [
    { type: Platform },
    { type: Location },
    { type: Router, decorators: [{ type: Optional }] }
];
/** @nocollapse */ NavController.ngInjectableDef = defineInjectable({ factory: function NavController_Factory() { return new NavController(inject(Platform), inject(Location), inject(Router, 8)); }, token: NavController, providedIn: "root" });
/**
 * @param {?} direction
 * @param {?} animated
 * @param {?} animationDirection
 * @return {?}
 */
function getAnimation(direction, animated, animationDirection) {
    if (animated === false) {
        return undefined;
    }
    if (animationDirection !== undefined) {
        return animationDirection;
    }
    if (direction === 'forward' || direction === 'back') {
        return direction;
    }
    return undefined;
}
/** @type {?} */
const DEFAULT_DIRECTION = 'auto';
/** @type {?} */
const DEFAULT_ANIMATED = undefined;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function proxyInputs(Cmp, inputs) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach(item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.el[item] = val; },
        });
    });
}
/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function proxyMethods(Cmp, methods) {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach(methodName => {
        Prototype[methodName] = function () {
            /** @type {?} */
            const args = arguments;
            return this.el.componentOnReady().then((el) => el[methodName].apply(el, args));
        };
    });
}
/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function proxyOutputs(instance, el, events) {
    events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonApp {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonApp.decorators = [
    { type: Component, args: [{ selector: 'ion-app', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonApp.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonAvatar {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonAvatar.decorators = [
    { type: Component, args: [{ selector: 'ion-avatar', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonBackButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonBackButton.decorators = [
    { type: Component, args: [{ selector: 'ion-back-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'defaultHref', 'icon', 'text'] },] },
];
/** @nocollapse */
IonBackButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonBackButton, ['color', 'mode', 'defaultHref', 'icon', 'text']);
class IonBackdrop {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionBackdropTap']);
    }
}
IonBackdrop.decorators = [
    { type: Component, args: [{ selector: 'ion-backdrop', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['visible', 'tappable', 'stopPropagation'] },] },
];
/** @nocollapse */
IonBackdrop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonBackdrop, ['visible', 'tappable', 'stopPropagation']);
class IonBadge {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonBadge.decorators = [
    { type: Component, args: [{ selector: 'ion-badge', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonBadge.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonBadge, ['color', 'mode']);
class IonButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
}
IonButton.decorators = [
    { type: Component, args: [{ selector: 'ion-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'buttonType', 'disabled', 'expand', 'fill', 'routerDirection', 'href', 'shape', 'size', 'strong', 'type'] },] },
];
/** @nocollapse */
IonButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonButton, ['color', 'mode', 'buttonType', 'disabled', 'expand', 'fill', 'routerDirection', 'href', 'shape', 'size', 'strong', 'type']);
class IonButtons {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonButtons.decorators = [
    { type: Component, args: [{ selector: 'ion-buttons', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonButtons.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonCard {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCard.decorators = [
    { type: Component, args: [{ selector: 'ion-card', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCard, ['color', 'mode']);
class IonCardContent {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardContent.decorators = [
    { type: Component, args: [{ selector: 'ion-card-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode'] },] },
];
/** @nocollapse */
IonCardContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCardContent, ['mode']);
class IonCardHeader {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-card-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'translucent'] },] },
];
/** @nocollapse */
IonCardHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCardHeader, ['color', 'mode', 'translucent']);
class IonCardSubtitle {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardSubtitle.decorators = [
    { type: Component, args: [{ selector: 'ion-card-subtitle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonCardSubtitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCardSubtitle, ['color', 'mode']);
class IonCardTitle {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCardTitle.decorators = [
    { type: Component, args: [{ selector: 'ion-card-title', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonCardTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCardTitle, ['color', 'mode']);
class IonCheckbox {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonCheckbox.decorators = [
    { type: Component, args: [{ selector: 'ion-checkbox', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'name', 'checked', 'disabled', 'value'] },] },
];
/** @nocollapse */
IonCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCheckbox, ['color', 'mode', 'name', 'checked', 'disabled', 'value']);
class IonChip {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonChip.decorators = [
    { type: Component, args: [{ selector: 'ion-chip', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'outline'] },] },
];
/** @nocollapse */
IonChip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonChip, ['color', 'mode', 'outline']);
class IonCol {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonCol.decorators = [
    { type: Component, args: [{ selector: 'ion-col', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['offset', 'offsetXs', 'offsetSm', 'offsetMd', 'offsetLg', 'offsetXl', 'pull', 'pullXs', 'pullSm', 'pullMd', 'pullLg', 'pullXl', 'push', 'pushXs', 'pushSm', 'pushMd', 'pushLg', 'pushXl', 'size', 'sizeXs', 'sizeSm', 'sizeMd', 'sizeLg', 'sizeXl'] },] },
];
/** @nocollapse */
IonCol.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonCol, ['offset', 'offsetXs', 'offsetSm', 'offsetMd', 'offsetLg', 'offsetXl', 'pull', 'pullXs', 'pullSm', 'pullMd', 'pullLg', 'pullXl', 'push', 'pushXs', 'pushSm', 'pushMd', 'pushLg', 'pushXl', 'size', 'sizeXs', 'sizeSm', 'sizeMd', 'sizeLg', 'sizeXl']);
class IonContent {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
    }
}
IonContent.decorators = [
    { type: Component, args: [{ selector: 'ion-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'fullscreen', 'forceOverscroll', 'scrollX', 'scrollY', 'scrollEvents'] },] },
];
/** @nocollapse */
IonContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonContent, ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']);
proxyInputs(IonContent, ['color', 'fullscreen', 'forceOverscroll', 'scrollX', 'scrollY', 'scrollEvents']);
class IonDatetime {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonDatetime.decorators = [
    { type: Component, args: [{ selector: 'ion-datetime', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'name', 'disabled', 'min', 'max', 'displayFormat', 'pickerFormat', 'cancelText', 'doneText', 'yearValues', 'monthValues', 'dayValues', 'hourValues', 'minuteValues', 'monthNames', 'monthShortNames', 'dayNames', 'dayShortNames', 'pickerOptions', 'placeholder', 'value'] },] },
];
/** @nocollapse */
IonDatetime.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonDatetime, ['open']);
proxyInputs(IonDatetime, ['mode', 'name', 'disabled', 'min', 'max', 'displayFormat', 'pickerFormat', 'cancelText', 'doneText', 'yearValues', 'monthValues', 'dayValues', 'hourValues', 'minuteValues', 'monthNames', 'monthShortNames', 'dayNames', 'dayShortNames', 'pickerOptions', 'placeholder', 'value']);
class IonFab {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFab.decorators = [
    { type: Component, args: [{ selector: 'ion-fab', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['horizontal', 'vertical', 'edge', 'activated'] },] },
];
/** @nocollapse */
IonFab.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonFab, ['close']);
proxyInputs(IonFab, ['horizontal', 'vertical', 'edge', 'activated']);
class IonFabButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
    }
}
IonFabButton.decorators = [
    { type: Component, args: [{ selector: 'ion-fab-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'color', 'activated', 'disabled', 'href', 'routerDirection', 'show', 'translucent', 'type', 'size'] },] },
];
/** @nocollapse */
IonFabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonFabButton, ['mode', 'color', 'activated', 'disabled', 'href', 'routerDirection', 'show', 'translucent', 'type', 'size']);
class IonFabList {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFabList.decorators = [
    { type: Component, args: [{ selector: 'ion-fab-list', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['activated', 'side'] },] },
];
/** @nocollapse */
IonFabList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonFabList, ['activated', 'side']);
class IonFooter {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonFooter.decorators = [
    { type: Component, args: [{ selector: 'ion-footer', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
];
/** @nocollapse */
IonFooter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonFooter, ['mode', 'translucent']);
class IonGrid {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonGrid.decorators = [
    { type: Component, args: [{ selector: 'ion-grid', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['fixed'] },] },
];
/** @nocollapse */
IonGrid.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonGrid, ['fixed']);
class IonHeader {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'translucent'] },] },
];
/** @nocollapse */
IonHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonHeader, ['mode', 'translucent']);
class IonIcon {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonIcon.decorators = [
    { type: Component, args: [{ selector: 'ion-icon', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['ariaLabel', 'color', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src'] },] },
];
/** @nocollapse */
IonIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonIcon, ['ariaLabel', 'color', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'size', 'src']);
class IonImg {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionImgDidLoad']);
    }
}
IonImg.decorators = [
    { type: Component, args: [{ selector: 'ion-img', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['alt', 'src'] },] },
];
/** @nocollapse */
IonImg.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonImg, ['alt', 'src']);
class IonInfiniteScroll {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInfinite']);
    }
}
IonInfiniteScroll.decorators = [
    { type: Component, args: [{ selector: 'ion-infinite-scroll', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['threshold', 'disabled', 'position'] },] },
];
/** @nocollapse */
IonInfiniteScroll.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonInfiniteScroll, ['complete']);
proxyInputs(IonInfiniteScroll, ['threshold', 'disabled', 'position']);
class IonInfiniteScrollContent {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonInfiniteScrollContent.decorators = [
    { type: Component, args: [{ selector: 'ion-infinite-scroll-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['loadingSpinner', 'loadingText'] },] },
];
/** @nocollapse */
IonInfiniteScrollContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonInfiniteScrollContent, ['loadingSpinner', 'loadingText']);
class IonInput {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
    }
}
IonInput.decorators = [
    { type: Component, args: [{ selector: 'ion-input', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'step', 'size', 'type', 'value'] },] },
];
/** @nocollapse */
IonInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonInput, ['setFocus']);
proxyInputs(IonInput, ['color', 'mode', 'accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'debounce', 'disabled', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'spellcheck', 'step', 'size', 'type', 'value']);
class IonItem {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItem.decorators = [
    { type: Component, args: [{ selector: 'ion-item', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'button', 'detail', 'detailIcon', 'disabled', 'href', 'lines', 'routerDirection', 'type'] },] },
];
/** @nocollapse */
IonItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonItem, ['color', 'mode', 'button', 'detail', 'detailIcon', 'disabled', 'href', 'lines', 'routerDirection', 'type']);
class IonItemDivider {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemDivider.decorators = [
    { type: Component, args: [{ selector: 'ion-item-divider', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'sticky'] },] },
];
/** @nocollapse */
IonItemDivider.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonItemDivider, ['color', 'mode', 'sticky']);
class IonItemGroup {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-item-group', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonItemGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonItemOption {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonItemOption.decorators = [
    { type: Component, args: [{ selector: 'ion-item-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'disabled', 'expandable', 'href'] },] },
];
/** @nocollapse */
IonItemOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonItemOption, ['color', 'mode', 'disabled', 'expandable', 'href']);
class IonItemOptions {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSwipe']);
    }
}
IonItemOptions.decorators = [
    { type: Component, args: [{ selector: 'ion-item-options', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['side'] },] },
];
/** @nocollapse */
IonItemOptions.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonItemOptions, ['side']);
class IonItemSliding {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionDrag']);
    }
}
IonItemSliding.decorators = [
    { type: Component, args: [{ selector: 'ion-item-sliding', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
];
/** @nocollapse */
IonItemSliding.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonItemSliding, ['getOpenAmount', 'getSlidingRatio', 'close', 'closeOpened']);
proxyInputs(IonItemSliding, ['disabled']);
class IonLabel {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonLabel.decorators = [
    { type: Component, args: [{ selector: 'ion-label', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'position'] },] },
];
/** @nocollapse */
IonLabel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonLabel, ['color', 'mode', 'position']);
class IonList {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonList.decorators = [
    { type: Component, args: [{ selector: 'ion-list', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'lines', 'inset'] },] },
];
/** @nocollapse */
IonList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonList, ['closeSlidingItems']);
proxyInputs(IonList, ['mode', 'lines', 'inset']);
class IonListHeader {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonListHeader.decorators = [
    { type: Component, args: [{ selector: 'ion-list-header', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'color'] },] },
];
/** @nocollapse */
IonListHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonListHeader, ['mode', 'color']);
class IonMenu {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
    }
}
IonMenu.decorators = [
    { type: Component, args: [{ selector: 'ion-menu', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['contentId', 'menuId', 'type', 'disabled', 'side', 'swipeGesture', 'maxEdgeStart'] },] },
];
/** @nocollapse */
IonMenu.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonMenu, ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']);
proxyInputs(IonMenu, ['contentId', 'menuId', 'type', 'disabled', 'side', 'swipeGesture', 'maxEdgeStart']);
class IonMenuButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonMenuButton.decorators = [
    { type: Component, args: [{ selector: 'ion-menu-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'menu', 'autoHide'] },] },
];
/** @nocollapse */
IonMenuButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonMenuButton, ['color', 'mode', 'menu', 'autoHide']);
class IonMenuToggle {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonMenuToggle.decorators = [
    { type: Component, args: [{ selector: 'ion-menu-toggle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['menu', 'autoHide'] },] },
];
/** @nocollapse */
IonMenuToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonMenuToggle, ['menu', 'autoHide']);
class IonNav {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionNavWillLoad', 'ionNavWillChange', 'ionNavDidChange']);
    }
}
IonNav.decorators = [
    { type: Component, args: [{ selector: 'ion-nav', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['swipeGesture', 'animated', 'animation', 'rootParams', 'root'] },] },
];
/** @nocollapse */
IonNav.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonNav, ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']);
proxyInputs(IonNav, ['swipeGesture', 'animated', 'animation', 'rootParams', 'root']);
class IonNavPop {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavPop.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-pop', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonNavPop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonNavPush {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavPush.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-push', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
];
/** @nocollapse */
IonNavPush.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonNavPush, ['component', 'componentProps']);
class IonNavSetRoot {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNavSetRoot.decorators = [
    { type: Component, args: [{ selector: 'ion-nav-set-root', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['component', 'componentProps'] },] },
];
/** @nocollapse */
IonNavSetRoot.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonNavSetRoot, ['component', 'componentProps']);
class IonNote {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonNote.decorators = [
    { type: Component, args: [{ selector: 'ion-note', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonNote.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonNote, ['color', 'mode']);
class IonProgressBar {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonProgressBar.decorators = [
    { type: Component, args: [{ selector: 'ion-progress-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'type', 'reversed', 'value', 'buffer', 'color'] },] },
];
/** @nocollapse */
IonProgressBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonProgressBar, ['mode', 'type', 'reversed', 'value', 'buffer', 'color']);
class IonRadio {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect', 'ionFocus', 'ionBlur']);
    }
}
IonRadio.decorators = [
    { type: Component, args: [{ selector: 'ion-radio', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'name', 'disabled', 'checked', 'value'] },] },
];
/** @nocollapse */
IonRadio.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonRadio, ['color', 'mode', 'name', 'disabled', 'checked', 'value']);
class IonRadioGroup {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange']);
    }
}
IonRadioGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-radio-group', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['allowEmptySelection', 'name', 'value'] },] },
];
/** @nocollapse */
IonRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonRadioGroup, ['allowEmptySelection', 'name', 'value']);
class IonRange {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonRange.decorators = [
    { type: Component, args: [{ selector: 'ion-range', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'debounce', 'name', 'dualKnobs', 'min', 'max', 'pin', 'snaps', 'step', 'disabled', 'value'] },] },
];
/** @nocollapse */
IonRange.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonRange, ['color', 'mode', 'debounce', 'name', 'dualKnobs', 'min', 'max', 'pin', 'snaps', 'step', 'disabled', 'value']);
class IonRefresher {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
    }
}
IonRefresher.decorators = [
    { type: Component, args: [{ selector: 'ion-refresher', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['pullMin', 'pullMax', 'closeDuration', 'snapbackDuration', 'disabled'] },] },
];
/** @nocollapse */
IonRefresher.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonRefresher, ['complete', 'cancel', 'getProgress']);
proxyInputs(IonRefresher, ['pullMin', 'pullMax', 'closeDuration', 'snapbackDuration', 'disabled']);
class IonRefresherContent {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRefresherContent.decorators = [
    { type: Component, args: [{ selector: 'ion-refresher-content', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText'] },] },
];
/** @nocollapse */
IonRefresherContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonRefresherContent, ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']);
class IonReorder {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonReorder.decorators = [
    { type: Component, args: [{ selector: 'ion-reorder', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonReorder.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonReorderGroup {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionItemReorder']);
    }
}
IonReorderGroup.decorators = [
    { type: Component, args: [{ selector: 'ion-reorder-group', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled'] },] },
];
/** @nocollapse */
IonReorderGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonReorderGroup, ['complete']);
proxyInputs(IonReorderGroup, ['disabled']);
class IonRippleEffect {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRippleEffect.decorators = [
    { type: Component, args: [{ selector: 'ion-ripple-effect', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['type'] },] },
];
/** @nocollapse */
IonRippleEffect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonRippleEffect, ['addRipple']);
proxyInputs(IonRippleEffect, ['type']);
class IonRow {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonRow.decorators = [
    { type: Component, args: [{ selector: 'ion-row', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonRow.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonSearchbar {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
    }
}
IonSearchbar.decorators = [
    { type: Component, args: [{ selector: 'ion-searchbar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'debounce', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value'] },] },
];
/** @nocollapse */
IonSearchbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonSearchbar, ['setFocus']);
proxyInputs(IonSearchbar, ['color', 'mode', 'animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'debounce', 'placeholder', 'searchIcon', 'showCancelButton', 'spellcheck', 'type', 'value']);
class IonSegment {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionStyle']);
    }
}
IonSegment.decorators = [
    { type: Component, args: [{ selector: 'ion-segment', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode', 'disabled', 'scrollable', 'value'] },] },
];
/** @nocollapse */
IonSegment.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSegment, ['color', 'mode', 'disabled', 'scrollable', 'value']);
class IonSegmentButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSelect']);
    }
}
IonSegmentButton.decorators = [
    { type: Component, args: [{ selector: 'ion-segment-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'checked', 'disabled', 'layout', 'value'] },] },
];
/** @nocollapse */
IonSegmentButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSegmentButton, ['mode', 'checked', 'disabled', 'layout', 'value']);
class IonSelect {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionFocus', 'ionBlur']);
    }
}
IonSelect.decorators = [
    { type: Component, args: [{ selector: 'ion-select', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'disabled', 'cancelText', 'okText', 'placeholder', 'name', 'selectedText', 'multiple', 'interface', 'interfaceOptions', 'value'] },] },
];
/** @nocollapse */
IonSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonSelect, ['open']);
proxyInputs(IonSelect, ['mode', 'disabled', 'cancelText', 'okText', 'placeholder', 'name', 'selectedText', 'multiple', 'interface', 'interfaceOptions', 'value']);
class IonSelectOption {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSelectOption.decorators = [
    { type: Component, args: [{ selector: 'ion-select-option', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['disabled', 'selected', 'value'] },] },
];
/** @nocollapse */
IonSelectOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSelectOption, ['disabled', 'selected', 'value']);
class IonSkeletonText {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSkeletonText.decorators = [
    { type: Component, args: [{ selector: 'ion-skeleton-text', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['width'] },] },
];
/** @nocollapse */
IonSkeletonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSkeletonText, ['width']);
class IonSlide {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSlide.decorators = [
    { type: Component, args: [{ selector: 'ion-slide', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonSlide.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonSlides {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
    }
}
IonSlides.decorators = [
    { type: Component, args: [{ selector: 'ion-slides', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'options', 'pager', 'scrollbar'] },] },
];
/** @nocollapse */
IonSlides.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonSlides, ['update', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes']);
proxyInputs(IonSlides, ['mode', 'options', 'pager', 'scrollbar']);
class IonSpinner {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonSpinner.decorators = [
    { type: Component, args: [{ selector: 'ion-spinner', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'duration', 'name', 'paused'] },] },
];
/** @nocollapse */
IonSpinner.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSpinner, ['color', 'duration', 'name', 'paused']);
class IonSplitPane {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionSplitPaneVisible']);
    }
}
IonSplitPane.decorators = [
    { type: Component, args: [{ selector: 'ion-split-pane', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['contentId', 'disabled', 'when'] },] },
];
/** @nocollapse */
IonSplitPane.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonSplitPane, ['contentId', 'disabled', 'when']);
class IonTabBar {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTabBar.decorators = [
    { type: Component, args: [{ selector: 'ion-tab-bar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'color', 'selectedTab', 'translucent'] },] },
];
/** @nocollapse */
IonTabBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonTabBar, ['mode', 'color', 'selectedTab', 'translucent']);
class IonTabButton {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTabButton.decorators = [
    { type: Component, args: [{ selector: 'ion-tab-button', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['selected', 'mode', 'layout', 'href', 'tab', 'disabled'] },] },
];
/** @nocollapse */
IonTabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonTabButton, ['selected', 'mode', 'layout', 'href', 'tab', 'disabled']);
class IonText {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonText.decorators = [
    { type: Component, args: [{ selector: 'ion-text', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonText, ['color', 'mode']);
class IonTextarea {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
    }
}
IonTextarea.decorators = [
    { type: Component, args: [{ selector: 'ion-textarea', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'color', 'autocapitalize', 'autofocus', 'clearOnEdit', 'debounce', 'disabled', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'spellcheck', 'cols', 'rows', 'wrap', 'value'] },] },
];
/** @nocollapse */
IonTextarea.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyMethods(IonTextarea, ['setFocus']);
proxyInputs(IonTextarea, ['mode', 'color', 'autocapitalize', 'autofocus', 'clearOnEdit', 'debounce', 'disabled', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'spellcheck', 'cols', 'rows', 'wrap', 'value']);
class IonThumbnail {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonThumbnail.decorators = [
    { type: Component, args: [{ selector: 'ion-thumbnail', changeDetection: 0, template: '<ng-content></ng-content>' },] },
];
/** @nocollapse */
IonThumbnail.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
class IonTitle {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonTitle.decorators = [
    { type: Component, args: [{ selector: 'ion-title', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color'] },] },
];
/** @nocollapse */
IonTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonTitle, ['color']);
class IonToggle {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
    }
}
IonToggle.decorators = [
    { type: Component, args: [{ selector: 'ion-toggle', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['mode', 'color', 'name', 'checked', 'disabled', 'value'] },] },
];
/** @nocollapse */
IonToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonToggle, ['mode', 'color', 'name', 'checked', 'disabled', 'value']);
class IonToolbar {
    /**
     * @param {?} c
     * @param {?} r
     */
    constructor(c, r) {
        c.detach();
        this.el = r.nativeElement;
    }
}
IonToolbar.decorators = [
    { type: Component, args: [{ selector: 'ion-toolbar', changeDetection: 0, template: '<ng-content></ng-content>', inputs: ['color', 'mode'] },] },
];
/** @nocollapse */
IonToolbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
proxyInputs(IonToolbar, ['color', 'mode']);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Config {
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    get(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.get(key, fallback);
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    getBoolean(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.getBoolean(key, fallback);
        }
        return false;
    }
    /**
     * @param {?} key
     * @param {?=} fallback
     * @return {?}
     */
    getNumber(key, fallback) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            return c.getNumber(key, fallback);
        }
        return 0;
    }
    /**
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    set(key, value) {
        /** @type {?} */
        const c = getConfig();
        if (c) {
            c.set(key, value);
        }
    }
}
Config.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */ Config.ngInjectableDef = defineInjectable({ factory: function Config_Factory() { return new Config(); }, token: Config, providedIn: "root" });
/** @type {?} */
const ConfigToken = new InjectionToken('USERCONFIG');
/**
 * @return {?}
 */
function getConfig() {
    /** @type {?} */
    const win = (/** @type {?} */ (window));
    if (typeof win !== 'undefined') {
        /** @type {?} */
        const Ionic = win.Ionic;
        if (Ionic && Ionic.config) {
            return Ionic.config;
        }
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@description
 * NavParams are an object that exists on a page and can contain data for that particular view.
 * Similar to how data was pass to a view in V1 with `$stateParams`, NavParams offer a much more flexible
 * option with a simple `get` method.
 *
 * \@usage
 * ```ts
 * import { NavParams } from '\@ionic/angular';
 *
 * export class MyClass{
 *
 *  constructor(navParams: NavParams){
 *    // userParams is an object we have in our nav-parameters
 *    navParams.get('userParams');
 *  }
 *
 * }
 * ```
 */
class NavParams {
    /**
     * @param {?=} data
     */
    constructor(data = {}) {
        this.data = data;
    }
    /**
     * Get the value of a nav-parameter for the current view
     *
     * ```ts
     * import { NavParams } from 'ionic-angular';
     *
     * export class MyClass{
     *  constructor(public navParams: NavParams){
     *    // userParams is an object we have in our nav-parameters
     *    this.navParams.get('userParams');
     *  }
     * }
     * ```
     *
     * @param {?} param Which param you want to look up
     * @return {?}
     */
    get(param) {
        return this.data[param];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularDelegate {
    /**
     * @param {?} zone
     * @param {?} appRef
     */
    constructor(zone, appRef) {
        this.zone = zone;
        this.appRef = appRef;
    }
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?=} location
     * @return {?}
     */
    create(resolver, injector, location) {
        return new AngularFrameworkDelegate(resolver, injector, location, this.appRef, this.zone);
    }
}
AngularDelegate.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AngularDelegate.ctorParameters = () => [
    { type: NgZone },
    { type: ApplicationRef }
];
class AngularFrameworkDelegate {
    /**
     * @param {?} resolver
     * @param {?} injector
     * @param {?} location
     * @param {?} appRef
     * @param {?} zone
     */
    constructor(resolver, injector, location, appRef, zone) {
        this.resolver = resolver;
        this.injector = injector;
        this.location = location;
        this.appRef = appRef;
        this.zone = zone;
        this.elRefMap = new WeakMap();
        this.elEventsMap = new WeakMap();
    }
    /**
     * @param {?} container
     * @param {?} component
     * @param {?=} params
     * @param {?=} cssClasses
     * @return {?}
     */
    attachViewToDom(container, component, params, cssClasses) {
        return new Promise(resolve => {
            this.zone.run(() => {
                /** @type {?} */
                const el = attachView(this.resolver, this.injector, this.location, this.appRef, this.elRefMap, this.elEventsMap, container, component, params, cssClasses);
                resolve(el);
            });
        });
    }
    /**
     * @param {?} _container
     * @param {?} component
     * @return {?}
     */
    removeViewFromDom(_container, component) {
        return new Promise(resolve => {
            this.zone.run(() => {
                /** @type {?} */
                const componentRef = this.elRefMap.get(component);
                if (componentRef) {
                    componentRef.destroy();
                    this.elRefMap.delete(component);
                    /** @type {?} */
                    const unbindEvents = this.elEventsMap.get(component);
                    if (unbindEvents) {
                        unbindEvents();
                        this.elEventsMap.delete(component);
                    }
                }
                resolve();
            });
        });
    }
}
/**
 * @param {?} resolver
 * @param {?} injector
 * @param {?} location
 * @param {?} appRef
 * @param {?} elRefMap
 * @param {?} elEventsMap
 * @param {?} container
 * @param {?} component
 * @param {?} params
 * @param {?} cssClasses
 * @return {?}
 */
function attachView(resolver, injector, location, appRef, elRefMap, elEventsMap, container, component, params, cssClasses) {
    /** @type {?} */
    const factory = resolver.resolveComponentFactory(component);
    /** @type {?} */
    const childInjector = Injector.create({
        providers: getProviders(params),
        parent: injector
    });
    /** @type {?} */
    const componentRef = (location)
        ? location.createComponent(factory, location.length, childInjector)
        : factory.create(childInjector);
    /** @type {?} */
    const instance = componentRef.instance;
    /** @type {?} */
    const hostElement = componentRef.location.nativeElement;
    if (params) {
        Object.assign(instance, params);
    }
    if (cssClasses) {
        for (const clazz of cssClasses) {
            hostElement.classList.add(clazz);
        }
    }
    /** @type {?} */
    const unbindEvents = bindLifecycleEvents(instance, hostElement);
    container.appendChild(hostElement);
    if (!location) {
        appRef.attachView(componentRef.hostView);
    }
    componentRef.changeDetectorRef.reattach();
    elRefMap.set(hostElement, componentRef);
    elEventsMap.set(hostElement, unbindEvents);
    return hostElement;
}
/** @type {?} */
const LIFECYCLES = [
    LIFECYCLE_WILL_ENTER,
    LIFECYCLE_DID_ENTER,
    LIFECYCLE_WILL_LEAVE,
    LIFECYCLE_DID_LEAVE,
    LIFECYCLE_WILL_UNLOAD
];
/**
 * @param {?} instance
 * @param {?} element
 * @return {?}
 */
function bindLifecycleEvents(instance, element) {
    /** @type {?} */
    const unregisters = LIFECYCLES.map(eventName => {
        /** @type {?} */
        const handler = (ev) => {
            if (typeof instance[eventName] === 'function') {
                instance[eventName](ev.detail);
            }
        };
        element.addEventListener(eventName, handler);
        return () => {
            element.removeEventListener(eventName, handler);
        };
    });
    return () => {
        unregisters.forEach(fn => fn());
    };
}
/** @type {?} */
const NavParamsToken = new InjectionToken('NavParamsToken');
/**
 * @param {?} params
 * @return {?}
 */
function getProviders(params) {
    return [
        {
            provide: NavParamsToken, useValue: params
        },
        {
            provide: NavParams, useFactory: provideNavParamsInjectable, deps: [NavParamsToken]
        }
    ];
}
/**
 * @param {?} params
 * @return {?}
 */
function provideNavParamsInjectable(params) {
    return new NavParams(params);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} views
 * @param {?} view
 * @param {?} direction
 * @return {?}
 */
function insertView(views, view, direction) {
    if (direction === 'root') {
        return setRoot(views, view);
    }
    else if (direction === 'forward') {
        return setForward(views, view);
    }
    else {
        return setBack(views, view);
    }
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setRoot(views, view) {
    views = views.filter(v => v.stackId !== view.stackId);
    views.push(view);
    return views;
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setForward(views, view) {
    /** @type {?} */
    const index = views.indexOf(view);
    if (index >= 0) {
        views = views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        views.push(view);
    }
    return views;
}
/**
 * @param {?} views
 * @param {?} view
 * @return {?}
 */
function setBack(views, view) {
    /** @type {?} */
    const index = views.indexOf(view);
    if (index >= 0) {
        return views.filter(v => v.stackId !== view.stackId || v.id <= view.id);
    }
    else {
        return setRoot(views, view);
    }
}
/**
 * @param {?} router
 * @param {?} activatedRoute
 * @return {?}
 */
function getUrl(router, activatedRoute) {
    /** @type {?} */
    const urlTree = router.createUrlTree(['.'], { relativeTo: activatedRoute });
    return router.serializeUrl(urlTree);
}
/**
 * @param {?} enteringView
 * @param {?} leavingView
 * @return {?}
 */
function isTabSwitch(enteringView, leavingView) {
    if (!leavingView) {
        return false;
    }
    return enteringView.stackId !== leavingView.stackId;
}
/**
 * @param {?} prefixUrl
 * @param {?} url
 * @return {?}
 */
function computeStackId(prefixUrl, url) {
    if (!prefixUrl) {
        return undefined;
    }
    /** @type {?} */
    const segments = toSegments(url);
    for (let i = 0; i < segments.length; i++) {
        if (i >= prefixUrl.length) {
            return segments[i];
        }
        if (segments[i] !== prefixUrl[i]) {
            return undefined;
        }
    }
    return undefined;
}
/**
 * @param {?} path
 * @return {?}
 */
function toSegments(path) {
    return path
        .split('/')
        .map(s => s.trim())
        .filter(s => s !== '');
}
/**
 * @param {?} view
 * @return {?}
 */
function destroyView(view) {
    if (view) {
        // TODO lifecycle event
        view.ref.destroy();
        view.unlistenEvents();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StackController {
    /**
     * @param {?} tabsPrefix
     * @param {?} containerEl
     * @param {?} router
     * @param {?} navCtrl
     * @param {?} zone
     */
    constructor(tabsPrefix, containerEl, router, navCtrl, zone) {
        this.containerEl = containerEl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.viewsSnapshot = [];
        this.views = [];
        this.skipTransition = false;
        this.nextId = 0;
        this.tabsPrefix = tabsPrefix !== undefined ? toSegments(tabsPrefix) : undefined;
    }
    /**
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    createView(ref, activatedRoute) {
        /** @type {?} */
        const url = getUrl(this.router, activatedRoute);
        /** @type {?} */
        const element = (/** @type {?} */ ((ref && ref.location && ref.location.nativeElement)));
        /** @type {?} */
        const unlistenEvents = bindLifecycleEvents(ref.instance, element);
        return {
            id: this.nextId++,
            stackId: computeStackId(this.tabsPrefix, url),
            unlistenEvents,
            element,
            ref,
            url,
        };
    }
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    getExistingView(activatedRoute) {
        /** @type {?} */
        const activatedUrlKey = getUrl(this.router, activatedRoute);
        /** @type {?} */
        const view = this.views.find(vw => vw.url === activatedUrlKey);
        if (view) {
            view.ref.changeDetectorRef.reattach();
        }
        return view;
    }
    /**
     * @param {?} enteringView
     * @return {?}
     */
    setActive(enteringView) {
        return __awaiter(this, void 0, void 0, function* () {
            let { direction, animation } = this.navCtrl.consumeTransition();
            /** @type {?} */
            const leavingView = this.activeView;
            if (isTabSwitch(enteringView, leavingView)) {
                direction = 'back';
                animation = undefined;
            }
            this.insertView(enteringView, direction);
            yield this.transition(enteringView, leavingView, animation, this.canGoBack(1), false);
            requestAnimationFrame(() => this.cleanup());
        });
    }
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    canGoBack(deep, stackId = this.getActiveStackId()) {
        return this.getStack(stackId).length > deep;
    }
    /**
     * @param {?} deep
     * @param {?=} stackId
     * @return {?}
     */
    pop(deep, stackId = this.getActiveStackId()) {
        return this.zone.run(() => {
            /** @type {?} */
            const views = this.getStack(stackId);
            /** @type {?} */
            const view = views[views.length - deep - 1];
            return this.navCtrl.navigateBack(view.url);
        });
    }
    /**
     * @return {?}
     */
    startBackTransition() {
        /** @type {?} */
        const leavingView = this.activeView;
        if (leavingView) {
            /** @type {?} */
            const views = this.getStack(leavingView.stackId);
            /** @type {?} */
            const enteringView = views[views.length - 2];
            enteringView.ref.changeDetectorRef.reattach();
            this.transition(enteringView, // entering view
            leavingView, // leaving view
            'back', true, true);
        }
    }
    /**
     * @param {?} shouldComplete
     * @return {?}
     */
    endBackTransition(shouldComplete) {
        if (shouldComplete) {
            this.skipTransition = true;
            this.pop(1);
        }
    }
    /**
     * @param {?=} stackId
     * @return {?}
     */
    getLastUrl(stackId) {
        /** @type {?} */
        const views = this.getStack(stackId);
        return views.length > 0 ? views[views.length - 1] : undefined;
    }
    /**
     * @return {?}
     */
    getActiveStackId() {
        return this.activeView ? this.activeView.stackId : undefined;
    }
    /**
     * @return {?}
     */
    destroy() {
        this.containerEl = (/** @type {?} */ (undefined));
        this.views.forEach(destroyView);
        this.activeView = undefined;
        this.views = [];
    }
    /**
     * @private
     * @param {?} stackId
     * @return {?}
     */
    getStack(stackId) {
        return this.views.filter(v => v.stackId === stackId);
    }
    /**
     * @private
     * @param {?} enteringView
     * @param {?} direction
     * @return {?}
     */
    insertView(enteringView, direction) {
        this.activeView = enteringView;
        this.views = insertView(this.views, enteringView, direction);
    }
    /**
     * @private
     * @return {?}
     */
    cleanup() {
        /** @type {?} */
        const activeRoute = this.activeView;
        /** @type {?} */
        const views = this.views;
        this.viewsSnapshot
            .filter(view => !views.includes(view))
            .forEach(view => destroyView(view));
        views.forEach(view => {
            if (view !== activeRoute) {
                /** @type {?} */
                const element = view.element;
                element.setAttribute('aria-hidden', 'true');
                element.classList.add('ion-page-hidden');
                view.ref.changeDetectorRef.detach();
            }
        });
        this.viewsSnapshot = views.slice();
    }
    /**
     * @private
     * @param {?} enteringView
     * @param {?} leavingView
     * @param {?} direction
     * @param {?} showGoBack
     * @param {?} progressAnimation
     * @return {?}
     */
    transition(enteringView, leavingView, direction, showGoBack, progressAnimation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.runningTransition !== undefined) {
                yield this.runningTransition;
                this.runningTransition = undefined;
            }
            if (this.skipTransition) {
                this.skipTransition = false;
                return;
            }
            /** @type {?} */
            const enteringEl = enteringView ? enteringView.element : undefined;
            /** @type {?} */
            const leavingEl = leavingView ? leavingView.element : undefined;
            /** @type {?} */
            const containerEl = this.containerEl;
            if (enteringEl && enteringEl !== leavingEl) {
                enteringEl.classList.add('ion-page', 'ion-page-invisible');
                if (enteringEl.parentElement !== containerEl) {
                    containerEl.appendChild(enteringEl);
                }
                yield containerEl.componentOnReady();
                this.runningTransition = containerEl.commit(enteringEl, leavingEl, {
                    deepWait: true,
                    duration: direction === undefined ? 0 : undefined,
                    direction,
                    showGoBack,
                    progressAnimation
                });
                yield this.runningTransition;
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRouterOutlet {
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     * @param {?} tabs
     * @param {?} changeDetector
     * @param {?} config
     * @param {?} navCtrl
     * @param {?} elementRef
     * @param {?} router
     * @param {?} zone
     * @param {?} activatedRoute
     */
    constructor(parentContexts, location, resolver, name, tabs, changeDetector, config, navCtrl, elementRef, router, zone, activatedRoute) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.config = config;
        this.activated = null;
        this.activatedView = null;
        this._activatedRoute = null;
        this.activateEvents = new EventEmitter();
        this.deactivateEvents = new EventEmitter();
        this.nativeEl = elementRef.nativeElement;
        this.name = name || PRIMARY_OUTLET;
        this.tabsPrefix = tabs === 'true' ? getUrl(router, activatedRoute) : undefined;
        this.stackCtrl = new StackController(this.tabsPrefix, this.nativeEl, router, navCtrl, zone);
        parentContexts.onChildOutletCreated(this.name, (/** @type {?} */ (this)));
    }
    /**
     * @param {?} animated
     * @return {?}
     */
    set animated(animated) {
        this.nativeEl.animated = animated;
    }
    /**
     * @param {?} swipe
     * @return {?}
     */
    set swipeGesture(swipe) {
        this._swipeGesture = swipe;
        this.nativeEl.swipeHandler = swipe ? {
            canStart: () => this.stackCtrl.canGoBack(1),
            onStart: () => this.stackCtrl.startBackTransition(),
            onEnd: shouldContinue => this.stackCtrl.endBackTransition(shouldContinue)
        } : undefined;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stackCtrl.destroy();
    }
    /**
     * @return {?}
     */
    getContext() {
        return this.parentContexts.getContext(this.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            /** @type {?} */
            const context = this.getContext();
            if (context && context.route) {
                this.activateWith(context.route, context.resolver || null);
            }
        }
        this.nativeEl.componentOnReady().then(() => {
            if (this._swipeGesture === undefined) {
                this.swipeGesture = this.config.getBoolean('swipeBackEnabled', this.nativeEl.mode === 'ios');
            }
        });
    }
    /**
     * @return {?}
     */
    get isActivated() {
        return !!this.activated;
    }
    /**
     * @return {?}
     */
    get component() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return this.activated.instance;
    }
    /**
     * @return {?}
     */
    get activatedRoute() {
        if (!this.activated) {
            throw new Error('Outlet is not activated');
        }
        return (/** @type {?} */ (this._activatedRoute));
    }
    /**
     * @return {?}
     */
    get activatedRouteData() {
        if (this._activatedRoute) {
            return this._activatedRoute.snapshot.data;
        }
        return {};
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    detach() {
        throw new Error('incompatible reuse strategy');
    }
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} _ref
     * @param {?} _activatedRoute
     * @return {?}
     */
    attach(_ref, _activatedRoute) {
        throw new Error('incompatible reuse strategy');
    }
    /**
     * @return {?}
     */
    deactivate() {
        if (this.activated) {
            if (this.activatedView) {
                this.activatedView.savedData = new Map((/** @type {?} */ (this.getContext())).children['contexts']);
            }
            /** @type {?} */
            const c = this.component;
            this.activatedView = null;
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    }
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    activateWith(activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        /** @type {?} */
        let cmpRef;
        /** @type {?} */
        let enteringView = this.stackCtrl.getExistingView(activatedRoute);
        if (enteringView) {
            cmpRef = this.activated = enteringView.ref;
            /** @type {?} */
            const saved = enteringView.savedData;
            if (saved) {
                // self-restore
                /** @type {?} */
                const context = (/** @type {?} */ (this.getContext()));
                context.children['contexts'] = saved;
            }
        }
        else {
            /** @type {?} */
            const snapshot = ((/** @type {?} */ (activatedRoute)))._futureSnapshot;
            /** @type {?} */
            const component = (/** @type {?} */ ((/** @type {?} */ (snapshot.routeConfig)).component));
            resolver = resolver || this.resolver;
            /** @type {?} */
            const factory = resolver.resolveComponentFactory(component);
            /** @type {?} */
            const childContexts = this.parentContexts.getOrCreateContext(this.name).children;
            /** @type {?} */
            const injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
            cmpRef = this.activated = this.location.createComponent(factory, this.location.length, injector);
            // Calling `markForCheck` to make sure we will run the change detection when the
            // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
            enteringView = this.stackCtrl.createView(this.activated, activatedRoute);
            this.changeDetector.markForCheck();
        }
        this.activatedView = enteringView;
        this.stackCtrl.setActive(enteringView).then(() => {
            this.activateEvents.emit(cmpRef.instance);
            emitEvent(this.nativeEl, (/** @type {?} */ (enteringView)));
        });
    }
    /**
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    canGoBack(deep = 1, stackId) {
        return this.stackCtrl.canGoBack(deep, stackId);
    }
    /**
     * @param {?=} deep
     * @param {?=} stackId
     * @return {?}
     */
    pop(deep = 1, stackId) {
        return this.stackCtrl.pop(deep, stackId);
    }
    /**
     * @param {?=} stackId
     * @return {?}
     */
    getLastUrl(stackId) {
        /** @type {?} */
        const active = this.stackCtrl.getLastUrl(stackId);
        return active ? active.url : undefined;
    }
    /**
     * @return {?}
     */
    getActiveStackId() {
        return this.stackCtrl.getActiveStackId();
    }
}
IonRouterOutlet.decorators = [
    { type: Directive, args: [{
                selector: 'ion-router-outlet',
                exportAs: 'outlet',
                inputs: ['animated', 'swipeGesture']
            },] },
];
/** @nocollapse */
IonRouterOutlet.ctorParameters = () => [
    { type: ChildrenOutletContexts },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: String, decorators: [{ type: Attribute, args: ['name',] }] },
    { type: String, decorators: [{ type: Optional }, { type: Attribute, args: ['tabs',] }] },
    { type: ChangeDetectorRef },
    { type: Config },
    { type: NavController },
    { type: ElementRef },
    { type: Router },
    { type: NgZone },
    { type: ActivatedRoute }
];
IonRouterOutlet.propDecorators = {
    activateEvents: [{ type: Output, args: ['activate',] }],
    deactivateEvents: [{ type: Output, args: ['deactivate',] }]
};
/**
 * @param {?} el
 * @param {?} view
 * @return {?}
 */
function emitEvent(el, view) {
    /** @type {?} */
    const ev = new CustomEvent('ionRouterOutletActivated', {
        bubbles: true,
        cancelable: true,
        detail: { view }
    });
    el.dispatchEvent(ev);
}
class OutletInjector {
    /**
     * @param {?} route
     * @param {?} childContexts
     * @param {?} parent
     */
    constructor(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        // tslint:disable-next-line
        return this.parent.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonTabs {
    /**
     * @param {?} navCtrl
     */
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    /**
     * @param {?} detail
     * @return {?}
     */
    onPageSelected(detail) {
        if (this.tabBar) {
            this.tabBar.selectedTab = detail.view.stackId;
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        /** @type {?} */
        const selected = this.outlet.getActiveStackId() === tab;
        /** @type {?} */
        const href = `${this.outlet.tabsPrefix}/${tab}`;
        /** @type {?} */
        const url = selected
            ? href
            : this.outlet.getLastUrl(tab) || href;
        return this.navCtrl.navigateRoot(url, {
            animated: true,
            animationDirection: 'back'
        });
    }
}
IonTabs.decorators = [
    { type: Component, args: [{
                selector: 'ion-tabs',
                template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner">
      <ion-router-outlet #outlet tabs="true"></ion-router-outlet>
    </div>
    <ng-content></ng-content>`,
                styles: [`
    :host {
      display: flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      flex-direction: column;

      width: 100%;
      height: 100%;

      contain: layout size style;
      z-index: $z-index-page-container;
    }
    .tabs-inner {
      position: relative;

      flex: 1;

      contain: layout size style;
    }`
                ]
            },] },
];
/** @nocollapse */
IonTabs.ctorParameters = () => [
    { type: NavController }
];
IonTabs.propDecorators = {
    outlet: [{ type: ViewChild, args: ['outlet', { read: IonRouterOutlet },] }],
    tabBar: [{ type: ContentChild, args: [IonTabBar,] }],
    onPageSelected: [{ type: HostListener, args: ['ionRouterOutletActivated', ['$event.detail'],] }],
    select: [{ type: HostListener, args: ['ionTabButtonClick', ['$event.detail.tab'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonBackButtonDelegate {
    /**
     * @param {?} routerOutlet
     * @param {?} navCtrl
     * @param {?} elementRef
     */
    constructor(routerOutlet, navCtrl, elementRef) {
        this.routerOutlet = routerOutlet;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultHref(value) {
        this.elementRef.nativeElement.defaultHref = value;
    }
    /**
     * @return {?}
     */
    get defaultHref() {
        return this.elementRef.nativeElement.defaultHref;
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        if (this.routerOutlet && this.routerOutlet.canGoBack()) {
            this.routerOutlet.pop();
            ev.preventDefault();
        }
        else if (this.defaultHref != null) {
            this.navCtrl.navigateBack(this.defaultHref);
            ev.preventDefault();
        }
    }
}
IonBackButtonDelegate.decorators = [
    { type: Directive, args: [{
                selector: 'ion-back-button',
                inputs: ['defaultHref']
            },] },
];
/** @nocollapse */
IonBackButtonDelegate.ctorParameters = () => [
    { type: IonRouterOutlet, decorators: [{ type: Optional }] },
    { type: NavController },
    { type: ElementRef }
];
IonBackButtonDelegate.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavDelegate {
    /**
     * @param {?} ref
     * @param {?} resolver
     * @param {?} injector
     * @param {?} angularDelegate
     * @param {?} location
     */
    constructor(ref, resolver, injector, angularDelegate, location) {
        ref.nativeElement.delegate = angularDelegate.create(resolver, injector, location);
    }
}
NavDelegate.decorators = [
    { type: Directive, args: [{
                selector: 'ion-nav',
            },] },
];
/** @nocollapse */
NavDelegate.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentFactoryResolver },
    { type: Injector },
    { type: AngularDelegate },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RouterLinkDelegate {
    /**
     * @param {?} locationStrategy
     * @param {?} navCtrl
     * @param {?} elementRef
     * @param {?} router
     * @param {?=} routerLink
     */
    constructor(locationStrategy, navCtrl, elementRef, router, routerLink) {
        this.locationStrategy = locationStrategy;
        this.navCtrl = navCtrl;
        this.elementRef = elementRef;
        this.router = router;
        this.routerLink = routerLink;
        this.routerDirection = 'forward';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateTargetUrlAndHref();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.updateTargetUrlAndHref();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateTargetUrlAndHref() {
        if (this.routerLink) {
            /** @type {?} */
            const href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
            this.elementRef.nativeElement.href = href;
        }
    }
    /**
     * @param {?} ev
     * @return {?}
     */
    onClick(ev) {
        this.navCtrl.setDirection(this.routerDirection);
        ev.preventDefault();
    }
}
RouterLinkDelegate.decorators = [
    { type: Directive, args: [{
                selector: '[routerLink]',
                inputs: ['routerDirection']
            },] },
];
/** @nocollapse */
RouterLinkDelegate.ctorParameters = () => [
    { type: LocationStrategy },
    { type: NavController },
    { type: ElementRef },
    { type: Router },
    { type: RouterLink, decorators: [{ type: Optional }] }
];
RouterLinkDelegate.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualFooter {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualFooter.decorators = [
    { type: Directive, args: [{ selector: '[virtualFooter]' },] },
];
/** @nocollapse */
VirtualFooter.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualHeader {
    /**
     * @param {?} templateRef
     */
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
VirtualHeader.decorators = [
    { type: Directive, args: [{ selector: '[virtualHeader]' },] },
];
/** @nocollapse */
VirtualHeader.ctorParameters = () => [
    { type: TemplateRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @hidden
 */
class VirtualItem {
    /**
     * @param {?} templateRef
     * @param {?} viewContainer
     */
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
}
VirtualItem.decorators = [
    { type: Directive, args: [{ selector: '[virtualItem]' },] },
];
/** @nocollapse */
VirtualItem.ctorParameters = () => [
    { type: TemplateRef },
    { type: ViewContainerRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonVirtualScroll {
    /**
     * @param {?} zone
     * @param {?} iterableDiffers
     * @param {?} elementRef
     */
    constructor(zone, iterableDiffers, elementRef) {
        this.zone = zone;
        this.iterableDiffers = iterableDiffers;
        this.refMap = new WeakMap();
        this.el = (/** @type {?} */ (elementRef.nativeElement));
        this.el.nodeRender = this.nodeRender.bind(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.trackBy && 'items' in changes) {
            // React on virtualScroll changes only once all inputs have been initialized
            /** @type {?} */
            const value = changes['items'].currentValue;
            if (this.differ === undefined && value != null) {
                try {
                    this.differ = this.iterableDiffers.find(value).create(this.trackBy);
                }
                catch (e) {
                    throw new Error(`Cannot find a differ supporting object '${value}'. VirtualScroll only supports binding to Iterables such as Arrays.`);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        // and if there actually are changes
        /** @type {?} */
        const changes = this.differ !== undefined && this.items ? this.differ.diff(this.items) : null;
        if (changes === null) {
            return;
        }
        // TODO: optimize
        this.checkRange(0);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} cell
     * @param {?} index
     * @return {?}
     */
    nodeRender(el, cell, index) {
        return this.zone.run(() => {
            /** @type {?} */
            let node;
            if (!el) {
                node = this.itmTmp.viewContainer.createEmbeddedView(this.getComponent(cell.type), { $implicit: cell.value, index }, index);
                el = getElement(node);
                this.refMap.set(el, node);
            }
            else {
                node = (/** @type {?} */ (this.refMap.get(el)));
                /** @type {?} */
                const ctx = node.context;
                ctx.$implicit = cell.value;
                ctx.index = cell.index;
            }
            // run sync change detections
            node.detectChanges();
            return el;
        });
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    getComponent(type) {
        switch (type) {
            case 'item': return this.itmTmp.templateRef;
            case 'header': return this.hdrTmp.templateRef;
            case 'footer': return this.ftrTmp.templateRef;
        }
        throw new Error('template for virtual item was not provided');
    }
}
IonVirtualScroll.decorators = [
    { type: Component, args: [{
                selector: 'ion-virtual-scroll',
                template: '<ng-content></ng-content>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'approxItemHeight',
                    'approxHeaderHeight',
                    'approxFooterHeight',
                    'headerFn',
                    'footerFn',
                    'items',
                    'itemHeight',
                    'trackBy'
                ]
            },] },
];
/** @nocollapse */
IonVirtualScroll.ctorParameters = () => [
    { type: NgZone },
    { type: IterableDiffers },
    { type: ElementRef }
];
IonVirtualScroll.propDecorators = {
    itmTmp: [{ type: ContentChild, args: [VirtualItem,] }],
    hdrTmp: [{ type: ContentChild, args: [VirtualHeader,] }],
    ftrTmp: [{ type: ContentChild, args: [VirtualFooter,] }]
};
/**
 * @param {?} view
 * @return {?}
 */
function getElement(view) {
    /** @type {?} */
    const rootNodes = view.rootNodes;
    for (let i = 0; i < rootNodes.length; i++) {
        if (rootNodes[i].nodeType === 1) {
            return rootNodes[i];
        }
    }
    throw new Error('virtual element was not created');
}
proxyInputs(IonVirtualScroll, [
    'approxItemHeight',
    'approxHeaderHeight',
    'approxFooterHeight',
    'headerFn',
    'footerFn',
    'items',
    'itemHeight'
]);
proxyMethods(IonVirtualScroll, [
    'checkEnd',
    'checkRange',
    'positionForItem'
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} ctrlName
 * @param {?} methodName
 * @param {...?} args
 * @return {?}
 */
function proxyMethod(ctrlName, methodName, ...args) {
    /** @type {?} */
    const controller = ensureElementInBody(ctrlName);
    return controller.componentOnReady()
        .then(() => ((/** @type {?} */ (controller)))[methodName].apply(controller, args));
}
/**
 * @param {?} elementName
 * @return {?}
 */
function ensureElementInBody(elementName) {
    /** @type {?} */
    let element = document.querySelector(elementName);
    if (!element) {
        element = document.createElement(elementName);
        document.body.appendChild(element);
    }
    return (/** @type {?} */ (element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template Opts, Overlay
 */
class OverlayBaseController {
    /**
     * @param {?} ctrl
     */
    constructor(ctrl) {
        this.ctrl = ctrl;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    create(opts) {
        return proxyMethod(this.ctrl, 'create', opts);
    }
    /**
     * @param {?=} data
     * @param {?=} role
     * @param {?=} id
     * @return {?}
     */
    dismiss(data, role, id) {
        return proxyMethod(this.ctrl, 'dismiss', data, role, id);
    }
    /**
     * @return {?}
     */
    getTop() {
        return proxyMethod(this.ctrl, 'getTop');
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ActionSheetController extends OverlayBaseController {
    constructor() {
        super('ion-action-sheet-controller');
    }
}
ActionSheetController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
ActionSheetController.ctorParameters = () => [];
/** @nocollapse */ ActionSheetController.ngInjectableDef = defineInjectable({ factory: function ActionSheetController_Factory() { return new ActionSheetController(); }, token: ActionSheetController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertController extends OverlayBaseController {
    constructor() {
        super('ion-alert-controller');
    }
}
AlertController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
AlertController.ctorParameters = () => [];
/** @nocollapse */ AlertController.ngInjectableDef = defineInjectable({ factory: function AlertController_Factory() { return new AlertController(); }, token: AlertController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Events {
    constructor() {
        this.c = new Map();
    }
    /**
     * Subscribe to an event topic. Events that get posted to that topic will trigger the provided handler.
     *
     * @param {?} topic the topic to subscribe to
     * @param {...?} handlers
     * @return {?}
     */
    subscribe(topic, ...handlers) {
        /** @type {?} */
        let topics = this.c.get(topic);
        if (!topics) {
            this.c.set(topic, topics = []);
        }
        topics.push(...handlers);
    }
    /**
     * Unsubscribe from the given topic. Your handler will no longer receive events published to this topic.
     *
     * @param {?} topic the topic to unsubscribe from
     * @param {?=} handler the event handler
     *
     * @return {?} true if a handler was removed
     */
    unsubscribe(topic, handler) {
        if (!handler) {
            return this.c.delete(topic);
        }
        /** @type {?} */
        const topics = this.c.get(topic);
        if (!topics) {
            return false;
        }
        // We need to find and remove a specific handler
        /** @type {?} */
        const index = topics.indexOf(handler);
        if (index < 0) {
            // Wasn't found, wasn't removed
            return false;
        }
        topics.splice(index, 1);
        if (topics.length === 0) {
            this.c.delete(topic);
        }
        return true;
    }
    /**
     * Publish an event to the given topic.
     *
     * @param {?} topic the topic to publish to
     * @param {...?} args
     * @return {?}
     */
    publish(topic, ...args) {
        /** @type {?} */
        const topics = this.c.get(topic);
        if (!topics) {
            return null;
        }
        return topics.map(handler => {
            try {
                return handler(...args);
            }
            catch (e) {
                console.error(e);
                return null;
            }
        });
    }
}
Events.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */ Events.ngInjectableDef = defineInjectable({ factory: function Events_Factory() { return new Events(); }, token: Events, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingController extends OverlayBaseController {
    constructor() {
        super('ion-loading-controller');
    }
}
LoadingController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
LoadingController.ctorParameters = () => [];
/** @nocollapse */ LoadingController.ngInjectableDef = defineInjectable({ factory: function LoadingController_Factory() { return new LoadingController(); }, token: LoadingController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CTRL = 'ion-menu-controller';
class MenuController {
    /**
     * Programmatically open the Menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully opened
     */
    open(menuId) {
        return proxyMethod(CTRL, 'open', menuId);
    }
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu is fully closed
     */
    close(menuId) {
        return proxyMethod(CTRL, 'close', menuId);
    }
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param {?=} menuId
     * @return {?} returns a promise when the menu has been toggled
     */
    toggle(menuId) {
        return proxyMethod(CTRL, 'toggle', menuId);
    }
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param {?} shouldEnable
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    enable(shouldEnable, menuId) {
        return proxyMethod(CTRL, 'enable', shouldEnable, menuId);
    }
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param {?} shouldEnable  True if it should be swipe-able, false if not.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu, which is useful for chaining.
     */
    swipeEnable(shouldEnable, menuId) {
        return proxyMethod(CTRL, 'swipeEnable', shouldEnable, menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    isOpen(menuId) {
        return proxyMethod(CTRL, 'isOpen', menuId);
    }
    /**
     * @param {?=} menuId
     * @return {?} Returns true if the menu is currently enabled, otherwise false.
     */
    isEnabled(menuId) {
        return proxyMethod(CTRL, 'isEnabled', menuId);
    }
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param {?=} menuId
     * @return {?} Returns the instance of the menu if found, otherwise `null`.
     */
    get(menuId) {
        return proxyMethod(CTRL, 'get', menuId);
    }
    /**
     * @return {?} Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen() {
        return proxyMethod(CTRL, 'getOpen');
    }
    /**
     * @return {?} Returns an array of all menu instances.
     */
    getMenus() {
        return proxyMethod(CTRL, 'getMenus');
    }
}
MenuController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */ MenuController.ngInjectableDef = defineInjectable({ factory: function MenuController_Factory() { return new MenuController(); }, token: MenuController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PickerController extends OverlayBaseController {
    constructor() {
        super('ion-picker-controller');
    }
}
PickerController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
PickerController.ctorParameters = () => [];
/** @nocollapse */ PickerController.ngInjectableDef = defineInjectable({ factory: function PickerController_Factory() { return new PickerController(); }, token: PickerController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalController extends OverlayBaseController {
    /**
     * @param {?} angularDelegate
     * @param {?} resolver
     * @param {?} injector
     */
    constructor(angularDelegate, resolver, injector) {
        super('ion-modal-controller');
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
}
ModalController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ModalController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverController extends OverlayBaseController {
    /**
     * @param {?} angularDelegate
     * @param {?} resolver
     * @param {?} injector
     */
    constructor(angularDelegate, resolver, injector) {
        super('ion-popover-controller');
        this.angularDelegate = angularDelegate;
        this.resolver = resolver;
        this.injector = injector;
    }
    /**
     * @param {?} opts
     * @return {?}
     */
    create(opts) {
        return super.create(Object.assign({}, opts, { delegate: this.angularDelegate.create(this.resolver, this.injector) }));
    }
}
PopoverController.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PopoverController.ctorParameters = () => [
    { type: AngularDelegate },
    { type: ComponentFactoryResolver },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ToastController extends OverlayBaseController {
    constructor() {
        super('ion-toast-controller');
    }
}
ToastController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */
ToastController.ctorParameters = () => [];
/** @nocollapse */ ToastController.ngInjectableDef = defineInjectable({ factory: function ToastController_Factory() { return new ToastController(); }, token: ToastController, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DomController {
    /**
     * @param {?} cb
     * @return {?}
     */
    read(cb) {
        getQueue().read(cb);
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    write(cb) {
        getQueue().write(cb);
    }
}
DomController.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] },
];
/** @nocollapse */ DomController.ngInjectableDef = defineInjectable({ factory: function DomController_Factory() { return new DomController(); }, token: DomController, providedIn: "root" });
/**
 * @return {?}
 */
function getQueue() {
    /** @type {?} */
    const Ionic = ((/** @type {?} */ (window))).Ionic;
    if (Ionic && Ionic.queue) {
        return Ionic.queue;
    }
    return {
        read: (cb) => window.requestAnimationFrame(cb),
        write: (cb) => window.requestAnimationFrame(cb)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonicRouteStrategy {
    /**
     * @param {?} _route
     * @return {?}
     */
    shouldDetach(_route) {
        return false;
    }
    /**
     * @param {?} _route
     * @return {?}
     */
    shouldAttach(_route) {
        return false;
    }
    /**
     * @param {?} _route
     * @param {?} _detachedTree
     * @return {?}
     */
    store(_route, _detachedTree) {
        return;
    }
    /**
     * @param {?} _route
     * @return {?}
     */
    retrieve(_route) {
        return null;
    }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        if (future.routeConfig !== curr.routeConfig) {
            return false;
        }
        if (future.component !== curr.component) {
            return false;
        }
        // checking router params
        /** @type {?} */
        const futureParams = future.params;
        /** @type {?} */
        const currentParams = curr.params;
        /** @type {?} */
        const keysA = Object.keys(futureParams);
        /** @type {?} */
        const keysB = Object.keys(currentParams);
        if (keysA.length !== keysB.length) {
            return false;
        }
        // Test for A's keys different from B.
        for (const key of keysA) {
            if (currentParams[key] !== futureParams[key]) {
                return false;
            }
        }
        return true;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function appInitialize(config) {
    return () => {
        /** @type {?} */
        const win = (/** @type {?} */ (window));
        if (typeof win !== 'undefined') {
            /** @type {?} */
            const Ionic = win.Ionic = win.Ionic || {};
            Ionic.config = config;
            Ionic.asyncQueue = false;
            Ionic.ael = (elm, eventName, cb, opts) => {
                if (elm.__zone_symbol__addEventListener && skipZone(eventName)) {
                    elm.__zone_symbol__addEventListener(eventName, cb, opts);
                }
                else {
                    elm.addEventListener(eventName, cb, opts);
                }
            };
            Ionic.rel = (elm, eventName, cb, opts) => {
                if (elm.__zone_symbol__removeEventListener && skipZone(eventName)) {
                    elm.__zone_symbol__removeEventListener(eventName, cb, opts);
                }
                else {
                    elm.removeEventListener(eventName, cb, opts);
                }
            };
            return defineCustomElements(win, {
                exclude: ['ion-tabs', 'ion-tab']
            });
        }
    };
}
/** @type {?} */
const SKIP_ZONE = [
    'scroll',
    'resize',
    'touchstart',
    'touchmove',
    'touchend',
    'mousedown',
    'mousemove',
    'mouseup',
    'ionStyle',
];
/**
 * @param {?} eventName
 * @return {?}
 */
function skipZone(eventName) {
    return SKIP_ZONE.indexOf(eventName) >= 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DECLARATIONS = [
    // proxies
    IonApp,
    IonAvatar,
    IonBackButton,
    IonBackdrop,
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCheckbox,
    IonChip,
    IonCol,
    IonContent,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonFabList,
    IonFooter,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonInput,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuButton,
    IonMenuToggle,
    IonNav,
    IonNavPop,
    IonNavPush,
    IonNavSetRoot,
    IonNote,
    IonProgressBar,
    IonRadio,
    IonRadioGroup,
    IonRange,
    IonRefresher,
    IonRefresherContent,
    IonReorder,
    IonReorderGroup,
    IonRippleEffect,
    IonRow,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
    IonSkeletonText,
    IonSlide,
    IonSlides,
    IonSpinner,
    IonSplitPane,
    IonTabBar,
    IonTabButton,
    IonText,
    IonTextarea,
    IonThumbnail,
    IonToggle,
    IonToolbar,
    IonTitle,
    IonTabs,
    // ngModel accessors
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    SelectValueAccessor,
    TextValueAccessor,
    // navigation
    IonRouterOutlet,
    IonBackButtonDelegate,
    NavDelegate,
    RouterLinkDelegate,
    // virtual scroll
    VirtualFooter,
    VirtualHeader,
    VirtualItem,
    IonVirtualScroll
];
class IonicModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IonicModule,
            providers: [
                {
                    provide: ConfigToken,
                    useValue: config
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: appInitialize,
                    multi: true,
                    deps: [
                        ConfigToken
                    ]
                }
            ]
        };
    }
}
IonicModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                providers: [AngularDelegate, ModalController, PopoverController],
                imports: [CommonModule]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BooleanValueAccessor, NumericValueAccessor, RadioValueAccessor, SelectValueAccessor, TextValueAccessor, IonTabs, IonBackButtonDelegate, NavDelegate, IonRouterOutlet, RouterLinkDelegate, NavParams, IonVirtualScroll, VirtualItem, VirtualHeader, VirtualFooter, AngularDelegate, ActionSheetController, AlertController, Events, LoadingController, MenuController, PickerController, ModalController, Platform, PopoverController, ToastController, NavController, DomController, Config, IonicRouteStrategy, IonicModule, IonApp, IonAvatar, IonBackButton, IonBackdrop, IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonMenuToggle, IonNav, IonNavPop, IonNavPush, IonNavSetRoot, IonNote, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSlide, IonSlides, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToggle, IonToolbar, appInitialize as ɵe, ValueAccessor as ɵb, ConfigToken as ɵa, OverlayBaseController as ɵd };

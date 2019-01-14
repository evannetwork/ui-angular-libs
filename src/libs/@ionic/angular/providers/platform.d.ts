import { BackButtonEventDetail, Platforms } from '@ionic/core';
import { Subject, Subscription } from 'rxjs';
export interface BackButtonEmitter extends Subject<BackButtonEventDetail> {
    subscribeWithPriority(priority: number, callback: () => Promise<any> | void): Subscription;
}
export declare class Platform {
    private _readyPromise;
    /**
     * @hidden
     */
    backButton: BackButtonEmitter;
    /**
     * The pause event emits when the native platform puts the application
     * into the background, typically when the user switches to a different
     * application. This event would emit when a Cordova app is put into
     * the background, however, it would not fire on a standard web browser.
     */
    pause: Subject<void>;
    /**
     * The resume event emits when the native platform pulls the application
     * out from the background. This event would emit when a Cordova app comes
     * out from the background, however, it would not fire on a standard web browser.
     */
    resume: Subject<void>;
    /**
     * The resize event emits when the browser window has changed dimensions. This
     * could be from a browser window being physically resized, or from a device
     * changing orientation.
     */
    resize: Subject<void>;
    constructor();
    /**
     * @returns returns true/false based on platform.
     * @description
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
     * @Component({...})
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
     */
    is(platformName: Platforms): boolean;
    /**
     * @returns the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
    platforms(): string[];
    ready(): Promise<string>;
    readonly isRTL: boolean;
    /**
     * Get the query string parameter
     */
    getQueryParam(key: string): string | null;
    isLandscape(): boolean;
    isPortrait(): boolean;
    testUserAgent(expression: string): boolean;
    url(): string;
    width(): number;
    height(): number;
}

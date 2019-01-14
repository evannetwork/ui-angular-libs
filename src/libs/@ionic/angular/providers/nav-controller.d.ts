import { Location } from '@angular/common';
import { NavigationExtras, Router, UrlTree } from '@angular/router';
import { RouterDirection } from '@ionic/core';
import { Platform } from './platform';
export interface AnimationOptions {
    animated?: boolean;
    animationDirection?: 'forward' | 'back';
}
export interface NavigationOptions extends NavigationExtras, AnimationOptions {
}
export declare class NavController {
    private location;
    private router?;
    private direction;
    private animated?;
    private guessDirection;
    private guessAnimation?;
    private lastNavId;
    constructor(platform: Platform, location: Location, router?: Router | undefined);
    navigateForward(url: string | UrlTree | any[], options?: NavigationOptions): void;
    navigateBack(url: string | UrlTree | any[], options?: NavigationOptions): void;
    navigateRoot(url: string | UrlTree | any[], options?: NavigationOptions): void;
    navigate(url: string | UrlTree | any[], options: NavigationOptions): Promise<boolean>;
    goBack(options?: AnimationOptions): void;
    setDirection(direction: RouterDirection, animated?: boolean, animationDirection?: 'forward' | 'back'): void;
    consumeTransition(): {
        direction: RouterDirection;
        animation: "forward" | "back" | undefined;
    };
}

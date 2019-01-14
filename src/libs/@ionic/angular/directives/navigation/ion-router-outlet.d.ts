import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ChildrenOutletContexts, OutletContext, Router } from '@angular/router';
import { Config } from '../../providers/config';
import { NavController } from '../../providers/nav-controller';
export declare class IonRouterOutlet implements OnDestroy, OnInit {
    private parentContexts;
    private location;
    private resolver;
    private changeDetector;
    private config;
    private activated;
    private activatedView;
    private _activatedRoute;
    private _swipeGesture?;
    private name;
    private stackCtrl;
    private nativeEl;
    tabsPrefix: string | undefined;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    animated: boolean;
    swipeGesture: boolean;
    constructor(parentContexts: ChildrenOutletContexts, location: ViewContainerRef, resolver: ComponentFactoryResolver, name: string, tabs: string, changeDetector: ChangeDetectorRef, config: Config, navCtrl: NavController, elementRef: ElementRef, router: Router, zone: NgZone, activatedRoute: ActivatedRoute);
    ngOnDestroy(): void;
    getContext(): OutletContext | null;
    ngOnInit(): void;
    readonly isActivated: boolean;
    readonly component: object;
    readonly activatedRoute: ActivatedRoute;
    readonly activatedRouteData: any;
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    detach(): ComponentRef<any>;
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    attach(_ref: ComponentRef<any>, _activatedRoute: ActivatedRoute): void;
    deactivate(): void;
    activateWith(activatedRoute: ActivatedRoute, resolver: ComponentFactoryResolver | null): void;
    canGoBack(deep?: number, stackId?: string): boolean;
    pop(deep?: number, stackId?: string): void;
    getLastUrl(stackId?: string): string | undefined;
    getActiveStackId(): string | undefined;
}

import { NavController } from '../../providers/nav-controller';
import { IonTabBar } from '../proxies';
import { IonRouterOutlet } from './ion-router-outlet';
import { RouteView } from './stack-utils';
export declare class IonTabs {
    private navCtrl;
    outlet: IonRouterOutlet;
    tabBar: IonTabBar | undefined;
    constructor(navCtrl: NavController);
    onPageSelected(detail: {
        view: RouteView;
    }): void;
    select(tab: string): void;
}

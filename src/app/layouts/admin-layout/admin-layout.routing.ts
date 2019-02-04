import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { FooditemsComponent } from '../../fooditems/fooditems.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { FoodtypeComponent } from '../../foodtype/foodtype.component';
import { AddtypeComponent } from '../../addtype/addtype.component';
import { AdditemComponent } from '../../additem/additem.component';
import { ShowdetailComponent } from '../../showdetail/showdetail.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FeedbackComponent } from '../../feedback/feedback.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'Order',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'fooditems',
    //         component: FooditemsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'foodtypes',     component: FoodtypeComponent },
    { path: 'fooditems',     component: FooditemsComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addtype',        component: AddtypeComponent },
    { path: 'additem',        component: AdditemComponent },
    { path: 'showdetail',        component: ShowdetailComponent },
    { path: 'feedback',        component: FeedbackComponent }

];

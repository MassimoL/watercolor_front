import { ThingsListComponent } from './pages/things-list/things-list.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ThingPageComponent } from './pages/thing-page/thing-page.component';
export const routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'things',
        component: ThingsListComponent,
    },
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'thing-page',
        component: ThingPageComponent,
    },
    {
        path: 'thing-page/:thing_id',
        component: ThingPageComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=app.routes.js.map
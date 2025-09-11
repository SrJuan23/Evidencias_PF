import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home';
import {DetailsComponent} from './components/details/details';

const routeConfig: Routes = [
{
    path: '',
    component: HomeComponent,
    title: 'Home page',
},
{
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
},
];
export default routeConfig;
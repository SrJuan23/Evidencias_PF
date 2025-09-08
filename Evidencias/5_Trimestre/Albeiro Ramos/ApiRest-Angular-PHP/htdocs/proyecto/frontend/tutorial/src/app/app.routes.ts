import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { DetailsComponent } from './components/details/details';

export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'Home Page' },
    {path:'details/:id', component:DetailsComponent, title:'Home Details' }
];

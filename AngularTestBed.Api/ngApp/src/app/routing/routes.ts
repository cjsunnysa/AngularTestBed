import { Routes } from '@angular/router';
import * as pages from '../pages';
import * as layouts from '../layouts';


const PAGES: Routes = [
    { path: 'landing', component: pages.LandingPageComponent },
    { path: 'functional', component: pages.FunctionalComponent },
    { path: 'reactive', component: pages.ReactivejsComponent },
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: '**', redirectTo: '/landing', pathMatch: 'full' }
];

export const ROUTES: Routes = [
    { path: '', component: layouts.BaseLayoutComponent, children: PAGES }
];
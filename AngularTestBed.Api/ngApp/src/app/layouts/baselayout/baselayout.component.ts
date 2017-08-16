import { Component } from '@angular/core';
import { MenuModel } from './../../models';
import { Router } from '@angular/router';


@Component({
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css']
})
export class BaseLayoutComponent {
    constructor(
        private router: Router
    ) { }

    selectedIndex: number = 0;

    menu: MenuModel[] = [
        { description: 'Landing', route: '' },
        { description: 'Functional Programming', route: '/functional' },
        { description: 'Reactive JS', route: '/reactive' }
    ];

    onRouteClick(route: string) {
        this.router.navigate([route]);
    }
}

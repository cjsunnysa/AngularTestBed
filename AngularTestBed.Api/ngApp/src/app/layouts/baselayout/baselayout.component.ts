import { Component } from '@angular/core';
import { MenuModel } from './../../models';

@Component({
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.css']
})
export class BaseLayoutComponent {
    menu: MenuModel[] = [
        { description: 'Landing', route: '' }
    ];
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './routing';

import * as layouts from './layouts';
import * as pages from './pages';

@NgModule({
    declarations: [
        AppComponent,
        layouts.BaseLayoutComponent,
        pages.LandingPageComponent,
        pages.FunctionalComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

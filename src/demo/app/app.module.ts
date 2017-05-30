import { NgModule, NO_ERRORS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule } from 'angular-icons';

import { AppComponent }  from './app.component';
import { Fa500pxComponent } from 'app/500px';
import { CustomComponent } from 'app/custom';
import { ColorComponent } from 'app/color';

@NgModule({
  imports:      [ BrowserModule, IconsModule],
  declarations: [ AppComponent, Fa500pxComponent, CustomComponent, ColorComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }

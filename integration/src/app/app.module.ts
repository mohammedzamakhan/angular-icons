import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconsModule, Fa500pxComponent } from 'angular-icons';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, IconsModule],
  declarations: [ AppComponent, Fa500pxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

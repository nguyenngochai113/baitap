import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { Baitap4Component } from './baitap4/baitap4.component';
import { Baitap5Component } from './baitap5/baitap5.component';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap2Component,
    Baitap3Component,
    Baitap4Component,
    Baitap5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

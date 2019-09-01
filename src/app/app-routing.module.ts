import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap3Component } from './baitap3/baitap3.component';
import { Baitap4Component } from './baitap4/baitap4.component';
import { Baitap5Component } from './baitap5/baitap5.component';


const routes: Routes = [
  {path: 'bt1' , component : Baitap1Component},
  {path: 'bt2' , component : Baitap2Component},
  {path: 'bt3' , component : Baitap3Component},
  {path: 'bt4' , component : Baitap4Component},
  {path: 'bt5' , component : Baitap5Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

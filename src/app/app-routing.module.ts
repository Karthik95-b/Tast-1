import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OffcanvasComponent } from './ampleLogic/offcanvas/offcanvas.component';


const appRoutes :Routes=[
  {
   path:'',component:OffcanvasComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }

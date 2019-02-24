import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminGuard } from '../../guard/admin.guard';

@NgModule({
  imports: [
    CommonModule,
 
  ],
  declarations: [],
  providers:[AdminGuard],

  bootstrap:[]
})
export class UserModule {
  constructor(){}
 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustumerPageRoutingModule } from './custumer-routing.module';

import { CustumerPage } from './custumer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustumerPageRoutingModule
  ],
  //declarations: [CustumerPage]
})
export class CustumerPageModule {}

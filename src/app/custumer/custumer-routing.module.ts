import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustumerPage } from './custumer.page';

const routes: Routes = [
  {
    path: '',
    component: CustumerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustumerPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesListComponent } from './components/vehicle/vehicles-list/vehicles-list.component';

const routes: Routes = [{ path: '', component: VehiclesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

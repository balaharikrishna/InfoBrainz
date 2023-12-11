import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWheelersComponent } from './two-wheelers/two-wheelers.component';
import { FourWheelersComponent } from './four-wheelers/four-wheelers.component';

const routes: Routes = [
  { path:'', redirectTo:'twoWheeler', pathMatch:'full'},
  { path: 'twoWheelers', component:TwoWheelersComponent},
  { path: 'fourWheelers', component:FourWheelersComponent},
  { path: '**', redirectTo: 'twoWheeler' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }

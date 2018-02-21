import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoListComponent } from './parqueadero/vehiculo-list/vehiculo-list.component';

const routes: Routes = [
  {path: 'comprobante', component: VehiculoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
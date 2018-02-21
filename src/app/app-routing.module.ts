import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoListComponent } from './parqueadero/vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './parqueadero/vehiculo-create/vehiculo-create.component';
import { VehiculoCreateMotoComponent } from './parqueadero/vehiculo-create-moto/vehiculo-create-moto.component';

const routes: Routes = [
  {path: 'comprobante', component: VehiculoListComponent},
  {path: 'crear', component: VehiculoCreateComponent},
  {path: 'crearmoto', component: VehiculoCreateMotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
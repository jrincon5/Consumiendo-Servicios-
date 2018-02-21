import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './vehiculo-create/vehiculo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiculoCreateMotoComponent } from './vehiculo-create-moto/vehiculo-create-moto.component';
import { VehiculoRemoveComponent } from './vehiculo-remove/vehiculo-remove.component';

@NgModule({
  imports: [
    CommonModule,
    ParqueaderoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VehiculoListComponent, VehiculoCreateComponent, VehiculoCreateMotoComponent, VehiculoRemoveComponent]
})
export class ParqueaderoModule { }

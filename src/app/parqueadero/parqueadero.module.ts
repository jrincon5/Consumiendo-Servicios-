import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParqueaderoRoutingModule } from './parqueadero-routing.module';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

@NgModule({
  imports: [
    CommonModule,
    ParqueaderoRoutingModule
  ],
  declarations: [VehiculoListComponent]
})
export class ParqueaderoModule { }

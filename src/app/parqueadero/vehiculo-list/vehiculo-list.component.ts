import { Component, OnInit } from '@angular/core';
import { Comprobante } from '../Comprobante';
import { VigilanteService } from '../vigilante.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css'],
  providers: [VigilanteService]
})
export class VehiculoListComponent implements OnInit {

  private comprobantes: Comprobante[];

  constructor(private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.getAllComprobantes();
  }

  getAllComprobantes(){
    this.vigilanteService.findAll().subscribe(
      comprobantes => {
        this.comprobantes = comprobantes;
      },
      err => {
        console.log(err);
      });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../Carro';

@Component({
  selector: 'app-vehiculo-create',
  templateUrl: './vehiculo-create.component.html',
  styleUrls: ['./vehiculo-create.component.css'],
  providers: [VigilanteService]
})
export class VehiculoCreateComponent implements OnInit, OnDestroy {

  carroForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.carroForm = new FormGroup({
      placa: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.carroForm.valid){
      let carro: Carro = new Carro(this.carroForm.controls['placa'].value);
      this.vigilanteService.saveCar(carro).subscribe();
    }
    this.carroForm.reset();
  }

}

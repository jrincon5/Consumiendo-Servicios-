import { Component, OnInit, OnDestroy } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Moto } from '../Moto';

@Component({
  selector: 'app-vehiculo-create-moto',
  templateUrl: './vehiculo-create-moto.component.html',
  styleUrls: ['./vehiculo-create-moto.component.css'],
  providers: [VigilanteService]
})
export class VehiculoCreateMotoComponent implements OnInit, OnDestroy  {

  motoForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.motoForm = new FormGroup({
      placa: new FormControl('', Validators.required),
      cilindraje: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.motoForm.valid){
      let carro: Moto = new Moto(this.motoForm.controls['placa'].value,
      this.motoForm.controls['cilindraje'].value);
      this.vigilanteService.saveMoto(carro).subscribe();
    }
    this.motoForm.reset();
  }

}

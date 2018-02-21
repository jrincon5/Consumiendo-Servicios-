import { Component, OnInit, OnDestroy } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehiculo-remove',
  templateUrl: './vehiculo-remove.component.html',
  styleUrls: ['./vehiculo-remove.component.css'],
  providers: [VigilanteService]
})
export class VehiculoRemoveComponent implements OnInit, OnDestroy {

  removeForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private vigilanteService: VigilanteService) { }

  ngOnInit() {
    this.removeForm = new FormGroup({
      placa: new FormControl('', Validators.required)
    });
  }

  ngOnDestroy(): void {
  }

  onSubmit(){
    if(this.removeForm.valid){
      let placa: String = this.removeForm.controls['placa'].value;
      this.vigilanteService.sacarVehiculo(placa).subscribe();
    }
    this.removeForm.reset();
  }

}

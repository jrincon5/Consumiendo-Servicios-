import { Injectable } from '@angular/core';
import { Comprobante } from './Comprobante';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Carro } from './Carro';
import { Moto } from './Moto';

@Injectable()
export class VigilanteService {

  private apiUrl = 'http://localhost:8090/parqueadero/consultarvehiculo';
  private apiUrl2 = 'http://localhost:8090/parqueadero/agregarcarro';
  private apiUrl3 = 'http://localhost:8090/parqueadero/agregarmoto';
  private apiUrl4 = 'http://localhost:8090/parqueadero/removervehiculo';

  constructor(private http: Http) { }

  findAll(): Observable<Comprobante[]>{
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveCar(carro: Carro): Observable<Carro> {
    return this.http.post(this.apiUrl2, carro)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveMoto(moto: Moto): Observable<Moto> {
    return this.http.post(this.apiUrl3, moto)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  sacarVehiculo(placa: String): Observable<string> {
    return this.http.post(this.apiUrl4, placa)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

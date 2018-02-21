import { Injectable } from '@angular/core';
import { Comprobante } from './Comprobante';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VigilanteService {

  private apiUrl = 'http://localhost:8090/parqueadero/consultarvehiculo';

  constructor(private http: Http) { }

  findAll(): Observable<Comprobante[]>{
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

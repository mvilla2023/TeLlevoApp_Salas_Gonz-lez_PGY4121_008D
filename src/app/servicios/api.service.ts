import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IConductores } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { IConductor } from '../pages/interfaces/interfaces';
import { IPasajeros } from '../pages/interfaces/interfaces';
import { IPasajero } from '../pages/interfaces/interfaces';
import { IViajes } from '../pages/interfaces/interfaces';
import { IViaje } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  listarConductores():Observable<IConductores>{
    return this.httpclient.get<IConductores>(`${environment.apiUrl}/conductores`);
  }

  CrearConductor(newConductor: IConductor): Observable<IConductor>{
    return this.httpclient.post<IConductores>(`${environment.apiUrl}/conductores`, newConductor);
  }

  listarPasajeros():Observable<IPasajeros>{
    return this.httpclient.get<IPasajeros>(`${environment.apiUrl}/pasajeros`);
  }

  CrearPasajero(newPasajero: IPasajero): Observable<IPasajero>{
    return this.httpclient.post<IPasajeros>(`${environment.apiUrl}/pasajeros`, newPasajero);
  }

  BuscarConductorId(id:number):Observable<IConductores>{
    return this.httpclient.get<IConductores>(`${environment.apiUrl}/conductores/?id=${id}`);
  }
  
  BuscarPasajeroId(id:number):Observable<IPasajeros>{
    return this.httpclient.get<IPasajeros>(`${environment.apiUrl}/pasajeros/?id=${id}`);
  }

  CrearViaje(newViaje: IViaje): Observable<IViaje>{
    return this.httpclient.post<IViajes>(`${environment.apiUrl}/viajes`, newViaje);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConductores, IConductor} from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPasajeros, IPasajero } from '../pages/interfaces/interfaces';
import { IViaje } from '../pages/interfaces/interfaces';
import { IViajes } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  crearConductor(newConductor: IConductor): Observable<IConductor>{
    return this.httpClient.post<IConductores>(`${environment.apiUrl}/conductores`, newConductor);
  }

  crearPasajero(newPasajero: IPasajero): Observable<IPasajero>{
    return this.httpClient.post<IPasajeros>(`${environment.apiUrl}/pasajeros`, newPasajero);
  }

  GetAllConductores():Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiUrl}/conductores`);
  }

  GetConductorById(codigo: any):Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiUrl}/conductores/?nombre=${codigo}`);
  }

  GetAllPasajeros():Observable<IPasajeros>{
    return this.httpClient.get<IPasajeros>(`${environment.apiUrl}/pasajeros`);
  }

  GetPasajeroById(codigo: any):Observable<IPasajeros>{
    return this.httpClient.get<IPasajeros>(`${environment.apiUrl}/pasajeros/?nombre=${codigo}`);
  }

  BuscarConductorId(id:number):Observable<IConductores>{
    return this.httpClient.get<IConductores>(`${environment.apiUrl}/conductores/?id=${id}`);
  }

  ActualizarConductor(nombre:any):Observable<IConductores>{
    return this.httpClient.put<IConductores>(`${environment.apiUrl}/conductores/${nombre.id}`, nombre);
  }

  BuscarPasajeroId(id:number):Observable<IPasajeros>{
    return this.httpClient.get<IPasajeros>(`${environment.apiUrl}/pasajeros/?id=${id}`);
  }

  ActualizarPasajero(nombre:any):Observable<IPasajeros>{
    return this.httpClient.put<IPasajeros>(`${environment.apiUrl}/pasajeros/${nombre.id}`, nombre);
  }

  ActualizarPasswordC(nombre:any):Observable<IConductores>{
    return this.httpClient.put<IConductores>(`${environment.apiUrl}/conductores/${nombre.id}`, nombre);
  }

  ActualizarPasswordP(nombre:any):Observable<IPasajeros>{
    return this.httpClient.put<IPasajeros>(`${environment.apiUrl}/pasajeros/${nombre.id}`, nombre);
  }

  crearViaje(newViaje: IViaje): Observable<IViaje>{
    return this.httpClient.post<IViajes>(`${environment.apiUrl}/viajes`, newViaje);
  }


  IsLogged(){
    return sessionStorage.getItem('nombre')!=null;
  }



}
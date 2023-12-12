import { HttpClient } from "@angular/common/http";
import { Observable, throwError, map } from "rxjs";
import { catchError, retry } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


export interface IConductores{
    id: number;
    nombre: string;
    password: string;
    patente: string;
    email: string;

}

export interface IConductor{
    nombre: string;
    password: string;
    patente: string;
    email: string;
}

export interface IPasajeros{
    id: number;
    nombre: string;
    password: string;
    email: string;
    isactive: boolean;
}

export interface IPasajero{
    nombre: string;
    password: string;
    email: string;
    isactive: boolean;
}

export interface IViajes{
    nombre: string;
    patente: string;
    valorViaje: string;
    destino: string;
    estado: string;
    id: number;
}

export interface IViaje{
    nombre: string;
    patente: string;
    valorViaje: string;
    destino: string;
    estado: string;
}


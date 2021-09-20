import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable } from "rxjs";
import {Proyect} from '../models/proyect'
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url:string;
 
    constructor(
     private _http: HttpClient

    ){
    this.url = Global.ulr;
    }
    
    testService(){
        return 'Probando el servicio de Angular';
    }


}
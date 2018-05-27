import { ErrorHandler } from './../app.error-handler';
import { BURGUER_API } from './../app.api';
import { Restaurante } from './restaurante/restaurante.model';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService{
    constructor(private http: Http){}

    restaurants(): Observable<Restaurante[]>{
      return this.http.get(`${BURGUER_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError)
    }
}
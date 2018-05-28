import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
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
      return this.http.get(`${BURGUER_API}/restaurants`).map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restauranteById(id: string): Observable<Restaurante>{
      return this.http.get(`${BURGUER_API}/restaurants/${id}`).map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    reviewsOfRestaurante(id: string): Observable <any>{
        return this.http.get(`${BURGUER_API}/restaurants/${id}/reviews`).map(response => response.json())
          .catch(ErrorHandler.handleError)
    }

    menuOfRestaurante(id: string): Observable<MenuItem[]>{
      return this.http.get(`${BURGUER_API}/restaurants/${id}/menu`).map(response => response.json())
        .catch(ErrorHandler.handleError)
    }
}
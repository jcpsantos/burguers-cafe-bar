import { Restaurante } from './restaurante/restaurante.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurante[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants=this.restaurantsService.restaurants()
  }

}

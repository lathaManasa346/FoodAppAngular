import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
food!: Food;
  constructor(private route: ActivatedRoute, private foodService : FoodService,
    private cartService: CartService, private router: Router) {
  route.params.subscribe(param =>{
    if(param['id']){
      this.food = foodService.getFoodById(param['id'])
    }
  })

  }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}

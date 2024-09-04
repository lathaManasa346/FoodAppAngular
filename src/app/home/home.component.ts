import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];

  constructor(private foodService: FoodService , private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(params =>{
    if(params['searchTerm']){
      const searchValue = params['searchTerm'].toLowerCase();
      console.log("seachV",searchValue)
      this.foods = this.foodService.getAll().filter(food=>
         food.name.toLowerCase().includes(searchValue)
      )
    }
    else if (params['tag1']) {
    this.foods = (params['tag1'].toLowerCase() == "all")
      ? this.foodService.getAll()
      : this.foodService.getAll().filter(food =>
          food.tags?.map(tag => tag.toLowerCase()).includes(params['tag1'].toLowerCase())
        );
  }

     else {
      this.foods = this.foodService.getAll();
    }
  })







  }





}

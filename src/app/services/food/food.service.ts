import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [

      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20 min',
        price: 25,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/images/foods/pizza2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 40,
        cookTime: '30-40 min',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/images/foods/meatball2.jpeg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 35,
        cookTime: '20-25 min',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/images/foods/hamburger5.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 15,
        cookTime: '10-12 min',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/images/foods/frenchfries4.jpeg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 20,
        cookTime: '40-50 min',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/images/foods/soup2.jpeg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 22,
        cookTime: '20-30 min',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/images/foods/pizza1.avif',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
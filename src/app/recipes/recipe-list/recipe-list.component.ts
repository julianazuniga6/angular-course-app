import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test recipe", "This is simply a test", "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-600x900.jpg"),
    new Recipe("Test recipe", "This is simply a test", "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-600x900.jpg"),
    new Recipe("Test recipe", "This is simply a test", "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01-600x900.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

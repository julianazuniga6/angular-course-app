import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() showRecipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test recipe 1", "This is simply a test 1", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
    new Recipe("Test recipe 2", "This is simply a test 2", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"),
    new Recipe("Test recipe 3", "This is simply a test 3", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe) {
    this.showRecipeDetails.emit(recipe);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipes = true;
  showShopping = false;

  onShowRecipes() {
    this.showRecipes = true;
    this.showShopping = false;
  }

  onShowShopping() {
    this.showRecipes = false;
    this.showShopping = true;
  }

}

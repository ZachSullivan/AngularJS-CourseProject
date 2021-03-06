import {Component} from '@angular/core';
import {Ingredient} from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shoppingList.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
}

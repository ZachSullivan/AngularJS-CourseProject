import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { ShoppingListComponent } from './Shopping List/shoppingList.component';
import { ShoppingListEditComponent } from './Shopping List/Shopping List Edit/shoppingListEdit.component';
import { RecipeListComponent } from './Recipes/Recipe List/recipeList.component';
import { RecipeItemComponent } from './Recipes/Recipe List/Recipe Item/recipeItem.component';
import { RecipeDetailComponent } from './Recipes/Recipe Detail/recipeDetail.component';
import { RecipesComponent } from './Recipes/recipes.component';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

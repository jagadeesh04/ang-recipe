import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  

    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe(
            'Dosa', 
            'This is Dosa', 
            'https://get.pxhere.com/photo/dish-meal-food-produce-fish-breakfast-cuisine-hong-kong-asian-food-vegetarian-indian-chinese-food-dim-sum-egg-roll-southeast-asian-food-indian-cuisine-lumpia-taquito-nem-r-n-spring-roll-786750.jpg',
            [
                new Ingredient('Dosa Pindi', 2),
                new Ingredient('Potato', 4)
            ]),
        new Recipe(
            'Rice', 
            'This is Rice', 
            'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hyderabadi_Vegetable_Biryani.jpg',
            [
                new Ingredient('Rice', 2),
                new Ingredient('Coconut', 1)
            ])
      ];

      constructor(private slService: ShoppingListService){

      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]): any {
        this.slService.addIngredients(ingredients);
      }
}
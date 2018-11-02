import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 
        'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
        new Recipe('An another Test Recipe', 'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hyderabadi_Vegetable_Biryani.jpg')
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { spread } from "q";

export class ShoppingListService{
    
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
            this.ingredients.push(ingredient);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]): any {
        //   for(let ingredient of ingredients){
        //     this.ingredients.push(ingredient);
        //   }     
        // ... is for pushing an array into another array
        this.ingredients.push(...ingredients);
        
    }

}
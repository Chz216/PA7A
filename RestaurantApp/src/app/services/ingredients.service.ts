import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class IngredientsService {
ingredientsChange = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient [] = [
      new Ingredient ('Tomatoes', 5),
      new Ingredient ('Apples', 3)
    ];

    getIngredients() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.emit(this.ingredients.slice());
    }

    addIngredients(auxIngredients: Ingredient[]){
      for (const i of auxIngredients) {
          this.ingredients.push(i);
      }
      this.ingredientsChange.emit(this.ingredients.slice());
    }
}

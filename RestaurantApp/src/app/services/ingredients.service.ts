import { Ingredient } from "../shared/ingredient.model";

export class IngredientsService {
    ingredients: Ingredient [] = [
      new Ingredient ('Tomatoes', 5),
      new Ingredient ('Apples', 3)
    ];

    getIngredients() {
      return this.ingredients.slice();
    }
}

import { Recipe } from "../recipes/Recipes.model";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe('Recipe a of pizza', 'This is a simply test', 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg'),
    new Recipe('A test recipes', 'This is a simply test', 'https://www.animalgourmet.com/wp-content/uploads/2017/09/cel-lisboa-60315-e1504660981599.jpg'),
    new Recipe('Recipe meat grilled', 'This is a simply test', 'https://www.nutridieta.com/wp-content/uploads/2015/02/Comida.jpg'),
  ]

  getRecipes(){
    return this.recipe.slice();
  }
}

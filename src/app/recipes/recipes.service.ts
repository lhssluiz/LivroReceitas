// [Estudos]
// o Service é só uma classe
// por isso não precisa do decorator

// É um local para centralizar os dados ou código
import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipesService {

    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Receita teste', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg'),
        new Recipe('Outra Receita teste', 'Isso é apenas um teste', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_960,c_limit/0621-Sheet-Pan-Gnocchi.jpg')
      ];

      getRecipes () {
          return this.recipes.slice();
          //slice serve para retornar uma cópia do array de receitas
      }
}
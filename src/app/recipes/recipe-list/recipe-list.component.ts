import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes!: Recipe[];

  constructor(
    private recipeService: RecipesService
    //recipe-list é dependente do recipe.service
  ) { 
    console.log('constructor de recipe-list foi chamado');
  }

  ngOnInit(): void {
    console.log('ngOnInit de recipe-list foi chamado');
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  destruirCompRecipeItem() {
    this.recipes.splice(0, 2);
  }

}

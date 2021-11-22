import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component"
import { RecipesComponent } from "./recipes/recipes.component"
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component"
import { ShoppingListComponent } from "./shopping-list/shopping-list.component"

const appRoutes: Routes = [
    { path: '', redirectTo: '/receitas', pathMatch: 'full'},
    { path: 'receitas', component: RecipesComponent,
        children: [
            { path: ':id', component: RecipeDetailComponent }] 
        },
    { path:'lista-de-comras', component: ShoppingListComponent }
]

@NgModule({
    imports:  [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
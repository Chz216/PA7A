import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';




  const routes: Routes = [{
      path: '', redirectTo: '/recipes', pathMatch: 'full'
    },   
    {
      path: 'recipes', component: RecipesComponent
    },
    {
      path: 'shoppinglist', component: ShoppingListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}

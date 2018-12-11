import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { NgModule } from '../../node_modules/@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';


  const routes: Routes = [{
      path: '', redirectTo: '/signin', pathMatch: 'full'
    },
    {
      path: 'recipes', component: RecipesComponent,
      children: [
      { path: 'signin', component: SigninComponent },
      { path: '', component: RecipesStartComponent },
      { path: 'new', component: RecipesEditComponent },
      { path: ':id', component: RecipesDetailComponent },
      { path: ':id/edit', component: RecipesEditComponent }
    ],
    canActivate:[AuthGuard]
    },
    {
      path: 'shoppinglist', component: ShoppingListComponent, canActivate:[AuthGuard]
    },
    {
        path: 'signin', component:SigninComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}

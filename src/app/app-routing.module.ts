import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';

// appRoutes c'est liste de routes
const routes: Routes = [
  {path:'produit' , component: ProduitComponent},
  {path:'dashbord' ,component :DashbordComponent},
  {path:'',redirectTo:"/dashbord",pathMatch:'full'}  // path par default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

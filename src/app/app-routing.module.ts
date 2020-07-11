import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {ProduitResolver} from './produit/produit.resolver';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// appRoutes c'est liste de routes
const routes: Routes = [
  
  { // the root home has two root childrens (produit,dashbord), they use the outlet "ContentOutlet"
    path:'home' ,component :HomeComponent,
    children:
    [
      {
        path:'produit' , 
        component: ProduitComponent,
        resolve : {produits:ProduitResolver}, // get the list of the produit from the server via the resolver
        outlet:"ContentOutlet"
      }, 
      {path:'dashbord' ,component :DashbordComponent,outlet:"ContentOutlet"},
    ]
  
  },
  {path :'login' ,component : LoginComponent},
  {path:'',redirectTo:"/home",pathMatch:'full'}  // path par default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }

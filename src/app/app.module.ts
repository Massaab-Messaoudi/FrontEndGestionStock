import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {ProduiMockService} from './produit/produit.mock.service';
import{Produit} from './shared/Produit';
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduiMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }

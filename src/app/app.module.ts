import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewprodutoComponent } from './components/viewproduto/viewproduto.component';
import { AddprodutoComponent } from './components/addproduto/addproduto.component';
import { UpdateprodutoComponent } from './components/updateproduto/updateproduto.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateusuarioComponent } from './components/updateusuario/updateusuario.component';
import { AddusuarioComponent } from './components/addusuario/addusuario.component';
import { ViewusuarioComponent } from './components/viewusuario/viewusuario.component';
import { LoginComponent } from './components/login/login.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ViewprodutoComponent,
    AddprodutoComponent,
    UpdateprodutoComponent,
    UpdateusuarioComponent,
    AddusuarioComponent,
    ViewusuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewprodutoComponent} from './components/viewproduto/viewproduto.component';
import {AddprodutoComponent} from './components/addproduto/addproduto.component';
import {UpdateprodutoComponent} from './components/updateproduto/updateproduto.component';
import {LoginComponent} from './components/login/login.component';
import {ViewusuarioComponent} from './components/viewusuario/viewusuario.component';
import {AddusuarioComponent} from './components/addusuario/addusuario.component';
import {UpdateusuarioComponent} from './components/updateusuario/updateusuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add', component: AddprodutoComponent },
  { path: 'update/:id', component: UpdateprodutoComponent },
  { path: 'view', component: ViewprodutoComponent },
  { path: 'perfil/:id', component: ViewusuarioComponent },
  { path: 'novo', component:AddusuarioComponent},
  { path: 'updatePerfil/:id', component:UpdateusuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path:'', redirectTo: 'entrar', pathMatch: 'full'},//toda vez que o endereço do servidor for vazio (sem /)

  {path:'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

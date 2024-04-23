import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteNuevoComponent } from './cliente-nuevo/cliente-nuevo.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';

const routes: Routes = [
  {path: 'lista', component: ClienteListaComponent},
  {path: 'nuevo', component: ClienteNuevoComponent},
  {path: 'editar', component: ClienteEditarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }

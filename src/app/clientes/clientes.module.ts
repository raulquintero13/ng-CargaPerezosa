import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteNuevoComponent } from './cliente-nuevo/cliente-nuevo.component';
import { ClienteEditarComponent } from './cliente-editar/cliente-editar.component';


@NgModule({
  declarations: [
    ClienteListaComponent,
    ClienteNuevoComponent,
    ClienteEditarComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }

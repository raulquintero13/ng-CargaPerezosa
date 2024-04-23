import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresListaComponent } from './proveedores-lista/proveedores-lista.component';
import { ProveedoresAgregarComponent } from './proveedores-agregar/proveedores-agregar.component';
import { ProveedoresRevisarComponent } from './proveedores-revisar/proveedores-revisar.component';


@NgModule({
  declarations: [
    ProveedoresListaComponent,
    ProveedoresAgregarComponent,
    ProveedoresRevisarComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ]
})
export class ProveedoresModule { }

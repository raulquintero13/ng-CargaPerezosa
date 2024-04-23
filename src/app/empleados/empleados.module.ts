import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { EmpleadoAgregarComponent } from './empleado-agregar/empleado-agregar.component';
import { EmpleadoRevisarComponent } from './empleado-revisar/empleado-revisar.component';


@NgModule({
  declarations: [
    EmpleadoListaComponent,
    EmpleadoAgregarComponent,
    EmpleadoRevisarComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }

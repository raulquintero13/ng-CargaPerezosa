import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { EmpleadoAgregarComponent } from './empleado-agregar/empleado-agregar.component';
import { EmpleadoRevisarComponent } from './empleado-revisar/empleado-revisar.component';

const routes: Routes = [
  {path: 'lista', component: EmpleadoListaComponent},
  {path: 'agregar', component: EmpleadoAgregarComponent},
  {path: 'revisar', component: EmpleadoRevisarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }

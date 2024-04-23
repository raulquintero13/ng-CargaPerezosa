import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresListaComponent } from './proveedores-lista/proveedores-lista.component';
import { ProveedoresAgregarComponent } from './proveedores-agregar/proveedores-agregar.component';
import { ProveedoresRevisarComponent } from './proveedores-revisar/proveedores-revisar.component';

const routes: Routes = [
  {path:'lista', component: ProveedoresListaComponent},
  {path:'agregar', component: ProveedoresAgregarComponent},
  {path: 'revisar', component: ProveedoresRevisarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }

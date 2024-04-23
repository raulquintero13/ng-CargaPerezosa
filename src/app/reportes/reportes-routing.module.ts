import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteDiarioComponent } from './reporte-diario/reporte-diario.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';

const routes: Routes = [
  {path:'diario', component: ReporteDiarioComponent},
  {path:'mensual', component: ReporteMensualComponent},
  {path:'general', component: ReporteGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }

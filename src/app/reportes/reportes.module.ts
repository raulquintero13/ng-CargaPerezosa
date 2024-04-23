import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ReporteDiarioComponent } from './reporte-diario/reporte-diario.component';
import { ReporteMensualComponent } from './reporte-mensual/reporte-mensual.component';
import { ReporteGeneralComponent } from './reporte-general/reporte-general.component';


@NgModule({
  declarations: [
    ReporteDiarioComponent,
    ReporteMensualComponent,
    ReporteGeneralComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }

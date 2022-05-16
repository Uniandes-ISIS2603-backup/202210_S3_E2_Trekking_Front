import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionGaleriaComponent } from './expedicion-galeria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [ExpedicionGaleriaComponent],
  exports: [ExpedicionGaleriaComponent]
})
export class ExpedicionGaleriaModule { }

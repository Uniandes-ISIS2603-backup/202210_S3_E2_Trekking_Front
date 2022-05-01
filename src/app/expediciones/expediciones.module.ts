import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionesComponent } from './expediciones.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpedicionesComponent],
  exports: [ExpedicionesComponent]
})
export class ExpedicionesModule { }

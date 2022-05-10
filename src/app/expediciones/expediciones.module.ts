import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionesComponent } from './expediciones.component';
import { ExpedicionCardModule } from '../components/expedicion-card/expedicion-card.module';

@NgModule({
  imports: [
    CommonModule,
    ExpedicionCardModule
  ],
  declarations: [ExpedicionesComponent],
  exports: [ExpedicionesComponent]
})
export class ExpedicionesModule { }

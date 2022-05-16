import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaCardComponent } from './mapa-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MapaCardComponent],
  exports: [MapaCardComponent]
})
export class MapaModule { }

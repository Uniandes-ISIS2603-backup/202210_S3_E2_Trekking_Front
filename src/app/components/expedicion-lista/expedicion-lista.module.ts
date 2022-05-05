import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpedicionListaComponent } from './expedicion-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExpedicionListaComponent],
  exports: [ExpedicionListaComponent]
})
export class ExpedicionListaModule { }

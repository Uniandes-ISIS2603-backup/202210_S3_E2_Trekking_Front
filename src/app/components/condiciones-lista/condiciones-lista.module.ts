import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondicionesListaComponent } from './condiciones-lista.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CondicionesListaComponent],
  exports: [CondicionesListaComponent]
})
export class CondicionesListaModule { }

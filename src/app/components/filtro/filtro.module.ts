import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroComponent } from './filtro.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FiltroComponent],
  exports: [FiltroComponent]
})
export class FiltroModule { }

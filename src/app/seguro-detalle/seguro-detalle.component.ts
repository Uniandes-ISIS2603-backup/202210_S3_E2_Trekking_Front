import { Component, OnInit, Input } from '@angular/core';
import { Seguro } from '../model/trekking.model';
import { ExpedicionListaModule } from '../components/expedicion-lista/expedicion-lista.module';

@Component({
  selector: 'app-seguro-detalle',
  templateUrl: './seguro-detalle.component.html',
  styleUrls: ['./seguro-detalle.component.css']
})
export class SeguroDetalleComponent implements OnInit {


  @Input() public seguro:Seguro = {} as Seguro;
  constructor() { }

  ngOnInit() {
  }

}

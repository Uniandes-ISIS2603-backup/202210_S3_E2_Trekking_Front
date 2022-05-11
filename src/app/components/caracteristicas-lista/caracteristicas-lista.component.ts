import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Caracteristica } from 'src/app/model/trekking.model';
@Component({
  selector: 'app-caracteristicas-lista',
  templateUrl: './caracteristicas-lista.component.html',
  styleUrls: ['./caracteristicas-lista.component.css']
})
export class CaracteristicasListaComponent implements OnInit {


  @Input() public caracteristica:Caracteristica = {} as Caracteristica;

  @Output() clickDetalle = new EventEmitter<Caracteristica>();
  constructor() { }

  ngOnInit() {
  }

}

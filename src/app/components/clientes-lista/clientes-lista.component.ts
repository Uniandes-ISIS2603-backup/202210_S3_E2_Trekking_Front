import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Cliente } from 'src/app/model/trekking.model';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {


  @Input() public cliente:Cliente = {} as Cliente;

  @Output() clickDetalle = new EventEmitter<Cliente>();
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Seguro } from '../model/trekking.model';
import { TrekkingService } from '../services/trekking.service'
@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {

  seguros: Array<Seguro> = [];
  @Output() clickDetalle = new EventEmitter<Seguro>();

  constructor(private trekkingService: TrekkingService) { }


  ngOnInit() {
    this.getSeguros()
  }

  getSeguros(){
    this.trekkingService.getSeguros().subscribe(seguros => {
      this.seguros = seguros
      console.log(seguros)
    });
  }

  clickSeguro(seguro:Seguro){
    this.clickDetalle.emit(seguro);
  }


}

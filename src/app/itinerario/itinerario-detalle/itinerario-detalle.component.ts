import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrekkingService } from 'src/app/services/trekking.service';
import { Expedicion, Itinerario } from '../../model/trekking.model';

@Component({
  selector: 'app-itinerario-detalle',
  templateUrl: './itinerario-detalle.component.html',
  styleUrls: ['./itinerario-detalle.component.css']
})
export class ItinerarioDetalleComponent implements OnInit {

  itinerarioId!: string;
  @Input() public itinerario:Itinerario = {} as Itinerario;

  constructor(
    private route: ActivatedRoute,
    private trekkingService: TrekkingService) { }

  getItinerario(){
    this.trekkingService.getItinerario(this.itinerarioId).subscribe(itinerario=>{
      this.itinerario = itinerario;
    })
  }

  ngOnInit() {
    if(Object.keys(this.itinerario).length === 0){
      this.itinerarioId = this.route.snapshot.paramMap.get('id')!
      if(this.itinerarioId){
        this.getItinerario();
      }
    }
  }
}

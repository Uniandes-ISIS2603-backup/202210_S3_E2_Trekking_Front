import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrekkingService } from 'src/app/services/trekking.service';
import { Expedicion, Itinerario, Recomendacion } from '../../model/trekking.model';

@Component({
  selector: 'app-recomendacion-detalle',
  templateUrl: './recomendacion-detalle.component.html',
  styleUrls: ['./recomendacion-detalle.component.css']
})
export class RecomendacionDetalleComponent implements OnInit {

  recomendacionId!: string;
  @Input() public recomendacion:Recomendacion = {} as Recomendacion;

  constructor(
    private route: ActivatedRoute,
    private trekkingService: TrekkingService) { }

  getRecomendacion(){
    this.trekkingService.getRecomendacion(this.recomendacionId).subscribe(recomendacion=>{
      this.recomendacion = recomendacion;
    })
  }

  ngOnInit() {
    if(Object.keys(this.recomendacion).length === 0){
      this.recomendacionId = this.route.snapshot.paramMap.get('id')!
      if(this.recomendacionId){
        this.getRecomendacion();
      }
    }
  }
}

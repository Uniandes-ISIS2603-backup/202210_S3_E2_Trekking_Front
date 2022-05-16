import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrekkingService } from 'src/app/services/trekking.service';
import { Expedicion, Itinerario, Proveedor, Recomendacion } from '../../model/trekking.model';

@Component({
  selector: 'app-expedicion-detalle',
  templateUrl: './expedicion-detalle.component.html',
  styleUrls: ['./expedicion-detalle.component.css']
})
export class ExpedicionDetalleComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;
  @Output() clickRecom = new EventEmitter<Recomendacion>();
  @Output() clickItin = new EventEmitter<Itinerario>();
  public proveedores:Proveedor[] | undefined;

  expedicionId!: string;

  constructor(
    private route: ActivatedRoute,
    private trekkingService: TrekkingService) { }

  getExpedicion(){
    this.trekkingService.getExpedicion(this.expedicionId).subscribe(expedicion=>{
      this.expedicion = expedicion;
    })
    this.trekkingService.getProveedoresExpedicion(this.expedicionId).subscribe(proveedores=>{
      this.proveedores = proveedores;
    })
  }

  windowScrolled = false;

  ngOnInit() {
    if(Object.keys(this.expedicion).length === 0){
      this.expedicionId = this.route.snapshot.paramMap.get('id')!
      if(this.expedicionId){
        this.getExpedicion();
      }
    }
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  clickRecomendacion(recomendacion:Recomendacion){
    this.clickRecom.emit(recomendacion);
  }

  clickItinerario(itinerario:Itinerario){
    this.clickItin.emit(itinerario);
  }

}

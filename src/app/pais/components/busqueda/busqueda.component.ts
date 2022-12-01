import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SPAPaises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais-services.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {


  nuevo: string = "";
  paises: SPAPaises[] = [];
  error: boolean = false;

  constructor(private PaisService : PaisServicesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }

  @Output() search = new EventEmitter<string>();

  busqueda(){
    this.search.emit(this.nuevo);
  }

}

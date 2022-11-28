import { Component, OnInit } from '@angular/core';
import { SPAPaises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais-services.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {
  nuevo: string = "";

  constructor(private PaisService : PaisServicesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get results(): SPAPaises[]{
    return this.PaisService.paises
  }

  busqueda(){

    this.PaisService.buscarPais(this.nuevo)
       .subscribe({
      next: (resp) => {
      this.PaisService.paises = resp
    },
    error: (err) => {
    }

    })
  
    
  }
}



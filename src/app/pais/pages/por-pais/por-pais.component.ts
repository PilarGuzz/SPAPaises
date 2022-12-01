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
  paises: SPAPaises[] = [];
  error: boolean = false;

  constructor(private PaisService : PaisServicesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // get results(): SPAPaises[]{
  //   return this.PaisService.paises
  // }

  busqueda(query : string){
    this.PaisService.buscarPais(query)
    .subscribe({
      next: (resp) => {
        this.paises = resp
        this.error = false;
      },
    error: (err) => {
      this.error=true
      this.paises=[]
    }
    

    })
  
    
  }
}



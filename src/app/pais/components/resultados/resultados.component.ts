import { Component, Input, OnInit } from '@angular/core';
import { PaisServicesService } from '../../services/pais-services.service';
import { ActivatedRoute, Params } from '@angular/router';
import { SPAPaises } from '../../interfaces/searchResponse.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent implements OnInit {

  @Input() paises: SPAPaises[] = [];
  constructor(private PaisService : PaisServicesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }


}

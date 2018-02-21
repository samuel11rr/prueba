import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html'
})
export class CuestionarioComponent implements OnInit {
  listado = {};
  constructor( private _preguntasService:PreguntasService ) {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  ngOnInit() {
    this.listado = this._preguntasService.getListado().listado;
    console.log(this.listado)
  }

}

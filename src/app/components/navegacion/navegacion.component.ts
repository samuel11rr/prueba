import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html'
})
export class NavegacionComponent implements OnInit {
  listado = {};
  constructor( private _preguntasService:PreguntasService ) {}

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });

    this.listado = this._preguntasService.getListado();
  }

  abreModal(tipo){
    $('#modal'+tipo).modal('open');
  }
}

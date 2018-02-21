import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html'
})
export class TextoComponent implements OnInit {
  preguntaTexto:FormGroup;
  nueva = {
    tipo: 1,
    pregunta: null
  }

  constructor( private _preguntasService:PreguntasService ) {
    this.preguntaTexto = new FormGroup({
      'pregunta': new FormControl( '', [
                                         Validators.minLength(3),
                                         Validators.required
                                        ])
    });

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  ngOnInit() {
  }

  guardaTexto(){
    this.nueva.pregunta = this.preguntaTexto.controls['pregunta'].value;
    // console.log(this.nueva);
    console.log(this._preguntasService.nuevaPregunta( this.nueva ));
    this.preguntaTexto.reset();
    this.cerrarModal('Texto');
    this._preguntasService.getListado();
  }

  cerrarModal(tipo){
    $('#modal'+tipo).modal('close');
  }

}

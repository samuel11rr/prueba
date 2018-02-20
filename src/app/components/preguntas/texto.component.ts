import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html'
})
export class TextoComponent implements OnInit {
  preguntaTexto:FormGroup;
  pregunta = {
    tipo: 1,
    pregunta: null
  }

  constructor() {
    this.preguntaTexto = new FormGroup({
      'pregunta': new FormControl( '', [
                                         Validators.minLength(3),
                                         Validators.required
                                        ])
    });
  }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  guardaTexto(){
    this.pregunta.pregunta = this.preguntaTexto.controls['pregunta'].value;

    console.log(this.pregunta);
  }

  cerrarModal(tipo){
    $('#modal'+tipo).modal('close');
  }

}

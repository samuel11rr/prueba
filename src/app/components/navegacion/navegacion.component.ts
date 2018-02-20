import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html'
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  abreModal(tipo){
    $('#modal'+tipo).modal('open');
  }
}

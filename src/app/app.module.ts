import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { TextoComponent } from './components/preguntas/texto.component';
import { CasillasComponent } from './components/preguntas/casillas.component';
import { DesplegableComponent } from './components/preguntas/desplegable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    TextoComponent,
    CasillasComponent,
    DesplegableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

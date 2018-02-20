import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// SERVICIOS
import { PreguntasService } from './services/preguntas.service';

// COMPONENTES
import { AppComponent } from './app.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { TextoComponent } from './components/preguntas/texto.component';
import { CasillasComponent } from './components/preguntas/casillas.component';
import { DesplegableComponent } from './components/preguntas/desplegable.component';
import { CuestionarioComponent } from './components/cuestionario/cuestionario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    TextoComponent,
    CasillasComponent,
    DesplegableComponent,
    CuestionarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    PreguntasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

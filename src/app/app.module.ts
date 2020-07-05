import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



// GRÁFICOS
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ArmaLibreComponent } from './components/arma-libre/arma-libre.component';
import { ListaArmasComponent } from './components/lista-armas/lista-armas.component';
import { ContedidoPrincipalComponent } from './components/contedido-principal/contedido-principal.component';
import { MostradorDeArmaComponent } from './components/mostrador-de-arma/mostrador-de-arma.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { PaoComponent } from './components/pao/pao.component';
@NgModule({
  declarations: [
    AppComponent,
    GraficoComponent,
    ArmaLibreComponent,
    ListaArmasComponent,
    ContedidoPrincipalComponent,
    MostradorDeArmaComponent,
    StatisticComponent,
    PaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ChartsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports:[
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

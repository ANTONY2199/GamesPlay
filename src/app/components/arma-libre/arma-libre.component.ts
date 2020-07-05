import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arma-libre',
  templateUrl: './arma-libre.component.html',
  styleUrls: ['./arma-libre.component.scss']
})
export class ArmaLibreComponent implements OnInit {
  momentoActual:any;
  hora:any;
  minuto:any;
  segundo:any;
  horaImprimible:any;
  constructor() { }

  ngOnInit(): void {
  }
  mueveReloj(){
    this.momentoActual = new Date();
    this.hora = this.momentoActual.getHours();
    this.minuto = this.momentoActual.getMinutes();
    this.segundo = this.momentoActual.getSeconds();
    this.horaImprimible = this.hora + " : " + this.minuto + " : " + this.segundo;
    // document.getElementById('reloj').innerText = this.horaImprimible
    console.log(this.horaImprimible);
    setTimeout((this.mueveReloj),1000);
  }
}

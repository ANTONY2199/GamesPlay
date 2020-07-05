import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
declare var webkitSpeechRecognition;



@Component({
  selector: 'pao-component',
  templateUrl: './pao.component.html',
  styleUrls: ['./pao.component.scss']
})
export class PaoComponent implements OnInit {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  // Variables
  value: any='Escribe lo que quieres que lea...';

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }
  leer(value){
    speechSynthesis.speak(new SpeechSynthesisUtterance(value));
  }
  escribir(){
    let rec;
    if (!('webkitSpeechRecognition' in window)) {
      alert('Usted no puede uzar esta funcionalidad...');
    } else {
      rec = new webkitSpeechRecognition();
      rec.lang = 'es-PE'
      rec.continuous = true;
      rec.interimResults = true;
      rec.addEventListener("result",iniciar)
    }
    function iniciar(event){
      for( let i = event.resultIndex;i<event.results.length;i++){
        document.getElementById('parrafo').innerText = event.results[i][0].transcript;
        console.log(this.value)
      }
    }
    rec.start();
  }
}

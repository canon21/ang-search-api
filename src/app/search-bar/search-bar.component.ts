import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  /* Senza type inference
  term : string = '' ;
  */

  @Output() submitted = new EventEmitter<string>();

  //Con type inference.
  term = '';

  constructor() { }

  ngOnInit(): void {
  }

  //Vedi component.html -> c'è un modo alternativo di fare l'assegnazione direttamente nel componente.html
  /*
  onInput(value: string) {
    this.term = value;
  }
  */

  
  //child to parent comunication
  onFormSubmit(event: any) {
    event.preventDefault();
    //child to parent comunication
    this.submitted.emit(this.term);
  }
}

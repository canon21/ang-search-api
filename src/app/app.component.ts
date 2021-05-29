import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages = [];
  //questo è uno shortcut. Vedi la forma completa annotata con ++
  constructor(private wikipedia: WikipediaService) {}

  // ++
  /*
    private wikipedia: WikipediaService;

    constructor(wikipedia: WikipediaService) {
        this.wikipedia = wikipedia;
    }
  */

  onTerm(term: string){
    this.wikipedia.search(term).subscribe( (response : any) => 
    {
      this.pages = response.query.search; 
    });
  }
}

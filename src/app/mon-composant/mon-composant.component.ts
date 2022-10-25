import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {

  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed : boolean = true;
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  displayMovies : boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
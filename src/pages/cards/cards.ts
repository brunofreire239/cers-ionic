import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Simulado 1'
        },
        date: 'Inicio 10/07/2017 ate 20/07/2017',
        image: 'assets/img/simulado1.jpg',
        content: 'O Simulado de direito constitucional ............O Simulado de direito constitucional ............O Simulado de direito constitucional ............',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Simulado 2'
        },
        date: 'Inicio 21/07/2017 ate 31/07/2017',
        image: 'assets/img/simulado2.png',
        content: 'Direito CivilDireito CivilDireito CivilDireito CivilDireito CivilDireito CivilDireito CivilDireito CivilDireito Civil'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Simulado 3'
        },
        date: 'Inicio 15/08/2017 ate 25/08/2017',
        image: 'assets/img/simulado3.jpg',
        content: 'O teste e feito apartiruda dawodkawda  DDe ateste daasd  e feito apartiruda dawodkawda  DDe ateste daasd  e feito apartiruda dawodkawda  DDe ateste daasd .'
      }
    ];

  }


  abrirSimulado(){
     this.navCtrl.push(SignupPage);  
  }
}

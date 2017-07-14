import { Component } from '@angular/core';

import { NavController, MenuController  } from 'ionic-angular';

import { CardsPage } from '../cards/cards';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(public navCtrl: NavController , menu: MenuController) { 
    menu.enable(true);
  }



  abrirGrafico() {
      this.navCtrl.push(TabsPage);   
  }


  abrirSimulado() {
      this.navCtrl.push(CardsPage);   
  }
  

  responderSimulado() {
      
  }
}

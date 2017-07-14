import { Component } from '@angular/core';

import { NavController,ModalController, MenuController  } from 'ionic-angular';

import { CardsPage } from '../cards/cards';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ModalNotificationPage } from '../content/modal-notification';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

  constructor(private modalCtrl: ModalController, public navCtrl: NavController , menu: MenuController) { 
    menu.enable(true);
  }



  abrirGrafico() {
      this.navCtrl.push(TabsPage);   
  }


  abrirSimulado() {
      this.navCtrl.push(CardsPage);   
  }
  

  abrirQuestoes() {     
       
    let modal = this.modalCtrl.create(ModalNotificationPage);
    modal.present();
       
  }

   abrirAgenda() {     
       
    let modal = this.modalCtrl.create(ModalNotificationPage,{agenda : true});
    modal.present();
       
  }
}

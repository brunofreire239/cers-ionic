import { Component,ViewChild } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { CardsPage }  from '..//cards/cards';

import { ContentPage } from '../content/content';
import { Platform,Content } from 'ionic-angular';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
 @ViewChild(Content) cont: Content;
    email: string;
    password: string;
  constructor(public toastCtrl: ToastController,
              public navCtrl: NavController, plataform: Platform) { 

              }


  doLogin() {
      this.navCtrl.push(ContentPage);
      let toast = this.toastCtrl.create({
        message: "Logado com Sucesso",
        duration: 3000,
        position: 'bottom'
        });
      toast.present();
   
  }

  /**
   * Reponsavel por da o Scroll na tela ate o determinado elemento.
   */
  scrollTo() {
    console.log("--------------------------------------------------------------------------------");
    let elemento = document.getElementById("testeScroll");
    console.log("CODIGO =  " + elemento)
    if (elemento) {

      let posicaoElemento = this.getPosition(elemento);
      this.cont.scrollToTop(0).then(scroll => {
        this.cont.scrollTo(0, posicaoElemento, 1000).then(data => {

          
        })
      })

    }

  }

  /**
   * Pega a posição do horario na tela .
   */
  getPosition(element) {

    var yPosition = 0;

    while (yPosition == 0) {
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    return yPosition;
  }

}

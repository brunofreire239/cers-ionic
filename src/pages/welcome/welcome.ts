import { Component } from '@angular/core';
import { NavController , ToastController} from 'ionic-angular';

import { MainPage } from '../../pages/pages';
import { CardsPage }  from '..//cards/cards';

import { ContentPage } from '../content/content';
import { Platform } from 'ionic-angular';
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

}

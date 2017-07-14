import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'modal-notification.html'
})

export class ModalNotificationPage {
  url: any;
  link: any;
  agenda: boolean = false;
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
      this.agenda = this.params.get('agenda');
      if(this.agenda){
        this.url = 'assets/img/agenda.png';
      }else{
         this.url = 'assets/img/questoes.png';
      }
      
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
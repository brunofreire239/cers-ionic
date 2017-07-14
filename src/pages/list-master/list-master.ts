import { Component } from '@angular/core';
import { NavController, ModalController, App } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Items } from '../../providers/providers';

import { Item } from '../../models/item';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;

  public pieChartLabels: string[] = ['Acertos', 'Erros'];
  public pieChartData: number[];
  public pieChartType: string = 'pie';
  public colorsEmptyObject: Array<any> = [{}];
  public datasets: any[];
  acerto: number = 343;
  erro: number = 124;
  COR_VERMELHA: string = "#FF0000";
  COR_VERDE: string = "#32CD32";


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(public app:App,public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();


    this.pieChartData = [this.acerto, this.erro]
    this.datasets = [
      {
        data: this.pieChartData,
        backgroundColor: [
          this.COR_VERDE,
          this.COR_VERMELHA
        ]
      }];
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  teste(){
    this.app.getRootNav().push(Tab2Root);
  }
}

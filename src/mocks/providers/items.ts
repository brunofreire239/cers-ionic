import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Folha de redação 1",
        "name1": "Questão 1",
        "profilePic": "assets/img/folha1.jpg",
        "about": "Burt is a Bear."
      },
      {
        "name": "Folha de redacao 2",
        "name1": "Questão 2",
        "profilePic": "assets/img/pagina.png",
        "about": "Charlie is a Cheetah."
      },
      {
        "name": "Folha de redacao 3",
        "name1": "Questão 3",
        "profilePic": "assets/img/folha3.jpg",
        "about": "Donald is a Duck."
      },
      {
        "name": "Folha de redacao 4",
        "name1": "Questão 4",
        "profilePic": "assets/img/folha1.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "name": "Folha de redacao 5",
        "name1": "Questão 5",
        "profilePic": "assets/img/folha2.png",
        "about": "Ellie is an Elephant."
      // },
      // {
      //   "name": "Molly Mouse",
      //   "profilePic": "assets/img/speakers/mouse.jpg",
      //   "about": "Molly is a Mouse."
      // },
      // {
      //   "name": "Paul Puppy",
      //   "profilePic": "assets/img/speakers/puppy.jpg",
      //   "about": "Paul is a Puppy."
       }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

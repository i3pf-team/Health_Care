import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public viewedMenu;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController) {
      this.viewedMenu=navParams.get('data')

    //menu.enable(true);
  }

  openMenu(evt) {
    if (evt === "patient") {
      this.menu.enable(true, 'menu1');
      this.menu.enable(false, 'menu2');
    } else if (evt === "doctor") {
      this.menu.enable(true, 'menu2');
      this.menu.enable(false, 'menu1');
    }
    this.menu.toggle();
  }

}
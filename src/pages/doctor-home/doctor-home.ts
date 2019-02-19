import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DoctorHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-doctor-home',
  templateUrl: 'doctor-home.html',
})
export class DoctorHomePage {
  public viewedMenu;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.viewedMenu=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorHomePage');
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

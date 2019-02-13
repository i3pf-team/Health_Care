import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DoctorHomePage } from '../doctor-home/doctor-home';
import { SelectCategoryPage } from '../select-category/select-category';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn(){

    this.navCtrl.push(DoctorHomePage);
  }
  Register(){

    this.navCtrl.push(SelectCategoryPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

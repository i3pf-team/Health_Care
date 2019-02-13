import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DoctorHomePage } from '../doctor-home/doctor-home';
import { SelectCategoryPage } from '../select-category/select-category';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',

})
export class LoginPage {
  public radiobtn_value = "patient";

  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  signIn() {
    if(this.radiobtn_value==="patient")
    {
    this.navCtrl.push(HomePage, {
      data: this.radiobtn_value
    });
  }
  else if(this.radiobtn_value==="doctor")
  {
    this.navCtrl.push(DoctorHomePage, {
      data: this.radiobtn_value
    });
  }
  }

  Register() {
    this.navCtrl.push(SelectCategoryPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  radiobtn_Selected_Value(radiobtn_value) {
    this.radiobtn_value = radiobtn_value;
    
  }

}

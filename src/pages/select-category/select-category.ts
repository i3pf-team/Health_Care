import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { RegisterDoctorPage } from '../register-doctor/register-doctor';
import { RegisterPatientPage } from '../register-patient/register-patient';


/**
 * Generated class for the SelectCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-category',
  templateUrl: 'select-category.html',
})
export class SelectCategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCategoryPage');
  }
  goToDoctorRegistration(){
    
    this.navCtrl.push(RegisterDoctorPage);
  }
  goToPatientRegistration(){

    this.navCtrl.push(RegisterPatientPage);
  }

}

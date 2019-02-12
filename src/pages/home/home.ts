import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterDoctorPage } from '../register-doctor/register-doctor';
import { RegisterPatientPage } from '../register-patient/register-patient';
import { SelectCategoryPage } from '../select-category/select-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Register(){

    this.navCtrl.push(SelectCategoryPage);
  }

}

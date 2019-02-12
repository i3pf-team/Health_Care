import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterDoctorPage } from '../register-doctor/register-doctor';
import { SelectCategoryPage } from '../select-category/select-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  registerDoctor(){

    this.navCtrl.push(RegisterDoctorPage);
  }
  registerPatient(){

    this.navCtrl.push(RegisterPatientPage);
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterDoctorPage } from '../register-doctor/register-doctor';
import { RegisterPatientPage } from '../register-patient/register-patient';

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

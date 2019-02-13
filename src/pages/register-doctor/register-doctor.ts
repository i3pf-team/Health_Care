import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-doctor',
  templateUrl: 'register-doctor.html',
})
export class RegisterDoctorPage {

  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }


  Register() {
    
    const toast =  this.toastController.create({
      message: 'Doctor Registered.',
      duration: 2000
    });
    toast.present();
   
  }

  Login(){

    this.navCtrl.push(LoginPage);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDoctorPage');
  }

}

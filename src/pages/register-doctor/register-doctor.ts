import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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


   presentToastWithOptions() {
    const toast =  this.toastController.create({
      message: 'User Registered!',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }

  Login(){

    const toast =  this.toastController.create({
      message: 'Goto Login Page',
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Done'
    });
    toast.present();
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDoctorPage');
  }

}

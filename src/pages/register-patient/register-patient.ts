import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { SelectCategoryPage} from '../select-category/select-category';

/**
 * Generated class for the RegisterPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register-patient',
  templateUrl: 'register-patient.html',
})
export class RegisterPatientPage {

  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
  Login(){

    this.navCtrl.push(SelectCategoryPage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPatientPage');
  }

}

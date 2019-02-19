import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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
  public images: Array<string>;  
  public grid: Array<Array<string>>;


  constructor(public toastController: ToastController,public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.viewedMenu=navParams.get('data');
 
    this.images = ['assets/imgs/consultation.png','assets/imgs/consultation.png','assets/imgs/consultation.png','assets/imgs/consultation.png', 'assets/imgs/consultation.png', 'assets/imgs/consultation.png'];
    this.grid = Array(Math.ceil(this.images.length/2));
    

    this.ionv();
    
  }
  public ionv() {

    const toast =  this.toastController.create({
      message: 'Doctor Registered.',
      duration: 2000
    });
    toast.present();

    let rowNum = 0; //counter to iterate over the rows in the grid
  
    for (let i = 0; i < this.images.length; i+=2) { //iterate images
  
      this.grid[rowNum] = Array(2); //declare two elements per row
  
      if (this.images[i]) { //check file URI exists
        this.grid[rowNum][0] = this.images[i] //insert image
      }
  
      if (this.images[i+1]) { //repeat for the second image
        this.grid[rowNum][1] = this.images[i+1]
      }
  
      rowNum++; //go on to the next row
    }
  
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

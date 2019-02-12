import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

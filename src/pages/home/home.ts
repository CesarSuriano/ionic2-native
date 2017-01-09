import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Vibration } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  vibrar(){
    Vibration.vibrate(3000);
  }

}

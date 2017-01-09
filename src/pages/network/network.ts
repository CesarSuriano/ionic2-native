import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Network } from 'ionic-native';

/*
  Generated class for the Network page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-network',
  templateUrl: 'network.html'
})
export class NetworkPage {
  
  connectionType: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkPage');
  }

  check(){
    this.connectionType = Network.connection;
    console.log();
  }

}

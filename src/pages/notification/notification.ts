import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';

/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

  send(){
    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret: "Olá" }
    });
  }

}

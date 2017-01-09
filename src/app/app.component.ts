import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { CameraPage } from '../pages/camera/camera';
import { HomePage } from '../pages/home/home';
import { NetworkPage } from '../pages/network/network';
import { NotificationPage } from '../pages/notification/notification';
import { BarcodePage } from '../pages/barcode/barcode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<any>;
  rootPage = HomePage; 

  constructor(platform: Platform, public menu: MenuController) {
    StatusBar.overlaysWebView(true); // let status bar overlay webview

    StatusBar.backgroundColorByHexString('#2C64C2');
    this.pages=[
      {title: 'Home', component: HomePage},
      {title: 'Camera', component: CameraPage},
      {title: 'Network', component: NetworkPage},
      {title: 'Notificacao', component: NotificationPage},
      {title: 'Codigo de barras', component: BarcodePage},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page){
    this.menu.close();
    console.log(page.component)
    this.rootPage = page.component;
  }
}

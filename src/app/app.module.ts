import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CameraPage } from '../pages/camera/camera';
import { NetworkPage } from '../pages/network/network';
import { NotificationPage } from '../pages/notification/notification';
import { BarcodePage } from '../pages/barcode/barcode';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CameraPage,
    NetworkPage,
    NotificationPage,
    BarcodePage
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CameraPage,
    NetworkPage,
    NotificationPage,
    BarcodePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

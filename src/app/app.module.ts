import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrerPage } from '../pages/registrer/registrer';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

var config = {
  apiKey: "AIzaSyClzTwyV1PjaYKpHqsfNdmtGRNj0xKxNvg",
  authDomain: "ipisafire.firebaseapp.com",
  databaseURL: "https://ipisafire.firebaseio.com",
  projectId: "ipisafire",
  storageBucket: "ipisafire.appspot.com",
  messagingSenderId: "268430048917"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}

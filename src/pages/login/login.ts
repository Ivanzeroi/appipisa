import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { RegistrerPage } from '../registrer/registrer';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Informacion',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

 iniciarsession(){
  this.fire.auth.signInWithEmailAndPassword(this.user.value /*+ '@domian.xta'*/, this.password.value)
  .then( data => {
    console.log('got some data', this.fire.auth.currentUser);
    this.alert('¡Éxito! Has iniciado sesión');
    this.navCtrl.setRoot( HomePage );
    // user is logged in
  })
  .catch( error => {
    console.log('tiene un error', error);
    this.alert(error.message);
  })
  console.log('Iniciando sesion con:', this.user.value, this.password.value);
}

  goToRegistrer() {
    this.navCtrl.push( RegistrerPage );
  }
}

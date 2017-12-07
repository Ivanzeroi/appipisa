import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
/**
 * Generated class for the RegistrerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrer',
  templateUrl: 'registrer.html',
})
export class RegistrerPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth,private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrerPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Informacion',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  RegistrarUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value  /* + '@ipisamexico.com'*/ , this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('¡Éxito! Te has registrado');
    })
    .catch(error => {
      console.log('tiene un error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.user.value, this.password.value);
  }

  LoginWithFacebook(){
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res=>{
      console.log(res);
    })
  }


}

import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { BarcodeScanner,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data={ };
  option:BarcodeScannerOptions ;
  constructor(public barcodeScanner: BarcodeScanner,private fire: AngularFireAuth,private toast: ToastController ,public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    
    this.fire.authState.subscribe(data=>{ 
      
       this.toast.create({
         message: 'Bienvenido a IPISA',
         duration: 10000}).present();
     
       });
 
      }
    
      scan(){
        this.option={
         
          prompt:"Please scan your code"
        }
        this.barcodeScanner.scan(this.option).then((barcodeData)=>{
          console.log(barcodeData);
          this.data = barcodeData;
        }, (err)=>{
          console.log(err);
        });
      }

}

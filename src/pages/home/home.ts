import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EncuestaPage } from '../encuesta/encuesta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  siguiente(){
    this.navCtrl.push(EncuestaPage);
  }

}

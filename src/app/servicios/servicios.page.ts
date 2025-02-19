import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ServiciosPage implements OnInit {

  constructor(private navCtrl: NavController) {}
  gthome(){
    this.navCtrl.navigateForward('/home');
  }
  gtcustumer(){
    this.navCtrl.navigateForward('/custumer');
  }
  gtayuda(){
    this.navCtrl.navigateForward('/ayuda');
  }
  ngOnInit() {
  }

}

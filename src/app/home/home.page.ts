import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }
  gtcustumer(){
    this.router.navigate(['/custumer']);
  }
  gtserv(){
    this.router.navigate(['/servicios']);
  }
  gtayuda(){
    this.router.navigate(['/ayuda']);
  }
  ngOnInit() {
  }

}

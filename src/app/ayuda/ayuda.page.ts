import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class AyudaPage implements OnInit {

  constructor(private router: Router) {}
  gthome() {
    this.router.navigate(['/home']);
  }
  gtserv() {
    this.router.navigate(['/servicios']);
  }
  gtcustumer() {
    this.router.navigate(['/custumer']);
  }
  ngOnInit() {
  }

}

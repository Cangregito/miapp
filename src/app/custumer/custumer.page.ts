import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.page.html',
  styleUrls: ['./custumer.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class CustumerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

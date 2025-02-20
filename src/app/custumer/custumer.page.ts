import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custumer',
  templateUrl: './custumer.page.html',
  styleUrls: ['./custumer.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, CommonModule] 
})
export class CustumerPage implements OnInit {

  items: string[] = ['Cliente 1', 'Cliente 2', 'Cliente 3', 'Cliente 4'];

  constructor() { }

  ngOnInit() { }

}

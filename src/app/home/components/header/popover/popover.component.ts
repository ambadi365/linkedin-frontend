import { Component, OnInit } from '@angular/core';
import { IonCardHeader, IonGrid } from '@ionic/angular';



@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onSignOut(){
    console.log(1,'onSignOut() called!');

  }

}

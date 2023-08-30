import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit(): void {}

  async presentModal() {

    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class2',
    });
    await modal.present();
    const {role} = await modal.onDidDismiss();
    console.log(7,role);

  }
}

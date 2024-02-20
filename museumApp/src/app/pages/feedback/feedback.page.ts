import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class FeedbackPage {
  name: string;
  email: string;
  feedback: string;

  constructor(public alertController: AlertController) {
    this.name = '';
    this.email = '';
    this.feedback = '';
   }

 
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Feedback Submitted',
      message: 'Thank you for your feedback!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Unable to submit the form',
      message: 'Fill all the fields',
      buttons: ['OK'],
    });
    await alert.present();
  };

  submitFeedback(){

    if (this.name.trim() !== '' && this.email.trim() !== '' && this.feedback.trim() !== '') {

      this.presentAlert();
    } else {
      this.showAlert();
  }
}
}



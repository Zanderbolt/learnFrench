import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics.service';

import { AudioService } from '../../../services/audio.service';


@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent implements OnInit {
  correctResults: number[] = [1, 2, 4, 2, 3]
  disabledQuestion: boolean[] = [false,false,false,false,false]
  correctAnswers: number = 0;
  questionsAnswered: number = 0;

  constructor(public toastController: ToastController, private topicService: TopicsService, private audio: AudioService) { }

  async correctToast() {
    const toast = await this.toastController.create({
      message: 'Correct',
      position: 'top',
      duration: 1000,
      color: 'success',
      buttons: [
        {
          icon: 'checkmark-circle'
        }
      ]
    });
    toast.present();
  }

  async incorrectToast() {
    const toast = await this.toastController.create({
      message: 'Try Again',
      position: 'top',
      duration: 1000,
      color: 'warning',
      buttons: [
        {
          icon: 'close-circle'
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
    this.audio.preload('avion', '../../../../assets/sounds/transport/avion.mp3');
    this.audio.preload('bateau', '../../../../assets/sounds/transport/bateau.mp3');
    this.audio.preload('velo', '../../../../assets/sounds/transport/velo.mp3');
    this.audio.preload('chariot', '../../../../assets/sounds/transport/chariot.mp3');
    this.audio.preload('moto', '../../../../assets/sounds/transport/moto.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');

  }

  checkAnswer(questionNumber: number, questionAnswer: number) {
  

    this.questionsAnswered++;
    if (this.correctResults[questionNumber] == questionAnswer) {
      switch (questionNumber) {
        case 0:
          this.audio.play('avion');
          break;
        case 1:
          this.audio.play('bateau');
          break;
        case 2:
          this.audio.play('velo');
          break;
        case 3:
          this.audio.play('chariot');
          break;
        case 4:
          this.audio.play('moto');
          break;
      }
      this.correctToast()
      this.correctAnswers++
      this.disabledQuestion[questionNumber] = true
    }
    else {
      this.incorrectToast()
      this.audio.play('try-again');

    }
    
    this.correctAnswers >= 3 ? this.topicService._approvedTopics[1] = true : this.topicService._approvedTopics[1] = false
    this.questionsAnswered >= 5 ? this.topicService._finishedTopics[1] = true : this.topicService._finishedTopics[1] = false
  }
  

}

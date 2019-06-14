import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics.service';

import { AudioService } from '../../../services/audio.service';


@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.scss'],
})
export class VerbsComponent implements OnInit {
  correctResults: number[] = [1, 2, 4, 2, 3]
  disabledQuestion: boolean[] = [false, false, false, false, false]
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
      message: 'Try Again!',
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
    this.audio.preload('se-battre', '../../../../assets/sounds/verbs/se-battre.mp3');
    this.audio.preload('passer', '../../../../assets/sounds/verbs/passer.mp3');
    this.audio.preload('courir', '../../../../assets/sounds/verbs/courir.mp3');
    this.audio.preload('parler', '../../../../assets/sounds/verbs/parler.mp3');
    this.audio.preload('nager', '../../../../assets/sounds/verbs/nager.mp3');  
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');
  
  }

  checkAnswer(questionNumber: number, questionAnswer: number) {
    
    this.questionsAnswered++;
    if (this.correctResults[questionNumber] == questionAnswer) {
      switch (questionNumber) {
        case 0:
          this.audio.play('se-battre');
          break;
        case 1:
          this.audio.play('passer');
          break;
        case 2:
          this.audio.play('courir');
          break;
        case 3:
          this.audio.play('parler');
          break;
        case 4:
          this.audio.play('nager');
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
    
    this.correctAnswers >= 3 ? this.topicService._approvedTopics[3] = true : this.topicService._approvedTopics[3] = false
    this.questionsAnswered >= 5 ? this.topicService._finishedTopics[3] = true : this.topicService._finishedTopics[3] = false

  }

}

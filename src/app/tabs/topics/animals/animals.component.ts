import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics.service';

import { AudioService } from '../../../services/audio.service';




@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
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
    this.audio.preload('chien', '../../../../assets/sounds/animals/chien.mp3');
    this.audio.preload('crabe', '../../../../assets/sounds/animals/crabe.mp3');
    this.audio.preload('cheval', '../../../../assets/sounds/animals/cheval.mp3');
    this.audio.preload('porc', '../../../../assets/sounds/animals/porc.mp3');
    this.audio.preload('tortue', '../../../../assets/sounds/animals/tortue.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');

  }

  checkAnswer(questionNumber: number, questionAnswer: number) {
    


    this.questionsAnswered++;
    if (this.correctResults[questionNumber] == questionAnswer) {
      switch (questionNumber) {
        case 0:
          this.audio.play('chien');
          break;
        case 1:
          this.audio.play('crabe');
          break;
        case 2:
          this.audio.play('cheval');
          break;
        case 3:
          this.audio.play('porc');
          break;
        case 4:
          this.audio.play('tortue');
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
    this.correctAnswers >= 3 ? this.topicService._approvedTopics[2] = true : this.topicService._approvedTopics[2] = false
    this.questionsAnswered >= 5 ? this.topicService._finishedTopics[2] = true : this.topicService._finishedTopics[2] = false
  }




}

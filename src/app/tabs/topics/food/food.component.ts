import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics.service';

import { AudioService } from '../../../services/audio.service';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {

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
    this.audio.preload('pomme', '../../../../assets/sounds/food/pomme.mp3');
    this.audio.preload('cerise', '../../../../assets/sounds/food/cerise.mp3');
    this.audio.preload('orange', '../../../../assets/sounds/food/orange.mp3');
    this.audio.preload('pasteque', '../../../../assets/sounds/food/pasteque.mp3');
    this.audio.preload('raisin', '../../../../assets/sounds/food/raisin.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');

  }

  checkAnswer(questionNumber: number, questionAnswer: number) {
    

    this.questionsAnswered++;
    if (this.correctResults[questionNumber] == questionAnswer) {
      switch (questionNumber) {
        case 0:
          this.audio.play('pomme');
          break;
        case 1:
          this.audio.play('cerise');
          break;
        case 2:
          this.audio.play('orange');
          break;
        case 3:
          this.audio.play('raisin');
          break;
        case 4:
          this.audio.play('pasteque');
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
    
    this.correctAnswers >= 3 ? this.topicService._approvedTopics[0] = true : this.topicService._approvedTopics[0] = false
    this.questionsAnswered >= 5 ? this.topicService._finishedTopics[0] = true : this.topicService._finishedTopics[0] = false
  }
}

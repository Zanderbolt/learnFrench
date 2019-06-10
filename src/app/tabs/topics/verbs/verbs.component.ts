import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TopicsService } from '../../../services/topics.service';

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
  constructor(public toastController: ToastController, private topicService: TopicsService) { }

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
      message: 'Inorrect',
      position: 'top',
      duration: 1000,
      color: 'danger',
      buttons: [
        {
          icon: 'close-circle'
        }
      ]
    });
    toast.present();
  }

  ngOnInit() { }

  checkAnswer(questionNumber: number, questionAnswer: number) {
    this.questionsAnswered++;
    if (this.correctResults[questionNumber] == questionAnswer) {
      this.correctToast()
      this.correctAnswers++
    }
    else {
      this.incorrectToast()
    }
    this.disabledQuestion[questionNumber] = true
    this.correctAnswers >= 3 ? this.topicService._approvedTopics[3] = true : this.topicService._approvedTopics[3] = false
    this.questionsAnswered == 5 ? this.topicService._finishedTopics[3] = true : this.topicService._finishedTopics[3] = false

    console.log(this.topicService._approvedTopics);
  }

}

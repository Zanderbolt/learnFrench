import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../services/audio.service';


@Component({
  selector: 'app-verbs-practice',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.scss'],
})
export class VerbsPracticeComponent implements OnInit {

  constructor(private audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('se-battre', '../../../../assets/sounds/verbs/se-battre.mp3');
    this.audio.preload('passer', '../../../../assets/sounds/verbs/passer.mp3');
    this.audio.preload('courir', '../../../../assets/sounds/verbs/courir.mp3');
    this.audio.preload('parler', '../../../../assets/sounds/verbs/parler.mp3');
    this.audio.preload('nager', '../../../../assets/sounds/verbs/nager.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');
  }

  checkAnswer(questionNumber: number) {
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
  }
}

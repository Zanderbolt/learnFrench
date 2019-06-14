import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';


@Component({
  selector: 'app-animals-practice',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsPracticeComponent implements OnInit {

  constructor(private audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('chien', '../../../../assets/sounds/animals/chien.mp3');
    this.audio.preload('crabe', '../../../../assets/sounds/animals/crabe.mp3');
    this.audio.preload('cheval', '../../../../assets/sounds/animals/cheval.mp3');
    this.audio.preload('porc', '../../../../assets/sounds/animals/porc.mp3');
    this.audio.preload('tortue', '../../../../assets/sounds/animals/tortue.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');
  }

  checkAnswer(questionNumber: number) {
      
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
       
  }

}

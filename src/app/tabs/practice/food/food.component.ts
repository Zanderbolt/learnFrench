import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-food-train',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodTrainComponent implements OnInit {

  constructor(private audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('pomme', '../../../../assets/sounds/food/pomme.mp3');
    this.audio.preload('cerise', '../../../../assets/sounds/food/cerise.mp3');
    this.audio.preload('orange', '../../../../assets/sounds/food/orange.mp3');
    this.audio.preload('pasteque', '../../../../assets/sounds/food/pasteque.mp3');
    this.audio.preload('raisin', '../../../../assets/sounds/food/raisin.mp3');

  }

  checkAnswer(questionNumber: number) {
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
  
   

  }

}

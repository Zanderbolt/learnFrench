import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-transport-practice',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportPracticeComponent implements OnInit {

  constructor(private audio: AudioService) { }

  ngOnInit() {
    this.audio.preload('avion', '../../../../assets/sounds/transport/avion.mp3');
    this.audio.preload('bateau', '../../../../assets/sounds/transport/bateau.mp3');
    this.audio.preload('velo', '../../../../assets/sounds/transport/velo.mp3');
    this.audio.preload('chariot', '../../../../assets/sounds/transport/chariot.mp3');
    this.audio.preload('moto', '../../../../assets/sounds/transport/moto.mp3');
    this.audio.preload('try-again', '../../../../assets/sounds/try-again.mp3');

  }

  checkAnswer(questionNumber: number) {
  

    
  
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

    
    
    
    
  }

}

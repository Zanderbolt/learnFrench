import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
})
export class TransportComponent implements OnInit {
  correctResults: number[] = [1, 2, 4, 2, 3]
  disabledQuestion: boolean[] = [false,false,false,false,false]
  constructor() { }

  ngOnInit() {}

  checkAnswer(questionNumber: number, questionAnswer: number) {
    this.correctResults[questionNumber] == questionAnswer ? alert("Correct") : alert("Incorrect");
    this.disabledQuestion[questionNumber] = true    
  }

}

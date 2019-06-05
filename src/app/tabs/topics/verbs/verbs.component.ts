import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.scss'],
})
export class VerbsComponent implements OnInit {
  correctResults: number[] = [1, 2, 4, 2, 3]
  disabledQuestion: boolean[] = [false,false,false,false,false]
  constructor() { }

  ngOnInit() {}

  checkAnswer(questionNumber: number, questionAnswer: number) {
    this.correctResults[questionNumber] == questionAnswer ? alert("Correct") : alert("Incorrect");
    this.disabledQuestion[questionNumber] = true    
  }

}

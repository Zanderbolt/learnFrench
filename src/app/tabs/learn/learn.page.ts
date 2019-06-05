import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor(private topicService : TopicsService) { }
  style : string = "font-color-title-card"
  ngOnInit() {
  }

}

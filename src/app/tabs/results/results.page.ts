import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  constructor(private topicService : TopicsService) { }

  ngOnInit() {
  }

  selectTopic(selectedTopic: string) {
    this.topicService.selectedTopic = selectedTopic;
    this.topicService.activeTopic();
  }

}

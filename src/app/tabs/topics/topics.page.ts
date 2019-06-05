import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.page.html',
  styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {

  constructor(private topicService : TopicsService) { }

  ngOnInit() {
  }

  selectTopic(selectedTopic: string) {
    this.topicService.selectedTopic = selectedTopic;
    this.topicService.activeTopic();
  }

}

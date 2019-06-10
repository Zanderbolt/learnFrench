import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  selectedTopic: string = "";
  _activeTopic: boolean[] =     [false, false, false, false, true]      //FOOD, TRANSPORT, ANIMALS, VERBS
  _approvedTopics: boolean[] =  [false, false, false, false]     //FOOD, TRANSPORT, ANIMALS, VERBS
  _finishedTopics: boolean[] =  [false, false, false, false]     //FOOD, TRANSPORT, ANIMALS, VERBS

  activeTopic() {
    switch (this.selectedTopic) {
      case "Food":
        this._activeTopic[0] = true;
        this._activeTopic[1] = false;
        this._activeTopic[2] = false;
        this._activeTopic[3] = false;
        this._activeTopic[4] = false;
        break;
      case "Transport":
        this._activeTopic[1] = true;
        this._activeTopic[0] = false;
        this._activeTopic[2] = false;
        this._activeTopic[3] = false;
        this._activeTopic[4] = false;
        break;
      case "Animals":
        this._activeTopic[2] = true;
        this._activeTopic[0] = false;
        this._activeTopic[1] = false;
        this._activeTopic[3] = false;
        this._activeTopic[4] = false;
        break;
      case "Verbs":
        this._activeTopic[3] = true;
        this._activeTopic[1] = false;
        this._activeTopic[2] = false;
        this._activeTopic[0] = false;
        this._activeTopic[4] = false;
        break;
    }
  }
  constructor() { }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.page.html',
  styleUrls: ['./how-to-use.page.scss'],

})
export class HowToUsePage implements OnInit {
   // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
   slideOpts = {
    pager : false,
    initialSlide: 0,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {
  }

}

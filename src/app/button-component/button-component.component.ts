import { Component, OnInit } from '@angular/core';
import * as countapi from 'countapi-js';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss']
})

export class ButtonComponent implements OnInit {

  value: any;

  // update page view count function on button click
  updateCount() {
    countapi.update('1ccb732e-b55a-4404-ad3f-0f99c02fe44e', 1).then((result) => {

      this.value = result.value;
      console.log(this.value);

    });
  }

  constructor() {}

  ngOnInit() {

    this.updateCount()

  }

}



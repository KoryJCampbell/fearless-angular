import { Component, OnInit } from '@angular/core';
import * as countapi from 'countapi-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  value:any;

  constructor() { }

  ngOnInit() {

    countapi.visits().then((result) => {

      this.value = result.value
      console.log(this.value);
    });
  }




}

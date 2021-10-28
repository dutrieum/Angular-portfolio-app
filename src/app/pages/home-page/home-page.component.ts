import { Component, OnInit } from '@angular/core';
import * as faker from "faker";
import {ImageModel} from "../../models/image.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dataPage : ImageModel[]

  constructor() {
    this.dataPage = [
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: 'Lorem ipsum',
        height: 250,
        width: 250,
        likes: 4,
      }),
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: 'Lorem ipsum',
        height: 250,
        width: 250,
        likes: 0,
      }),
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: 'Lorem ipsum ipsum ipsum ipsum ipsum',
        height: 250,
        width: 250,
        likes: 2,
      }),
    ]
  }

  ngOnInit(): void {
  }

}

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
  dataPage2 : ImageModel[]

  constructor() {
    this.dataPage = [
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: faker.lorem.words(7),
        height: 250,
        width: 250,
        username: faker.internet.userName(faker.name.findName()),
      }),
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: faker.lorem.words(5),
        height: 250,
        width: 300,
        username: faker.internet.userName(faker.name.findName()),
      }),
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: faker.lorem.words(6),
        height: 300,
        width: 400,
        username: faker.internet.userName(faker.name.findName()),
      }),
    ];

    this.dataPage2 = [
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc: faker.lorem.words(7),
        height: 250,
        width: 250,
        username: faker.internet.userName(faker.name.findName()),
      }),
      new ImageModel ({
        url: faker.image.imageUrl(140,140,undefined,true, true),
        desc:  faker.lorem.words(3),
        height: 250,
        width: 200,
        username: faker.internet.userName(faker.name.findName()),
      }),
    ];
  }

  ngOnInit(): void {
  }

}

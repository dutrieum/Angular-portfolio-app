import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() dataPage: any

  constructor() { }

  ngOnInit(): void {
  }

  onClickLikeButton(index : number): void {
    const counterDisplay = document.querySelector('.counter_display[data-index = "'+ index +'"]');
    if (counterDisplay) {
      let counterString = counterDisplay.innerHTML;
      let counterNumber = Number(counterString);
      counterNumber++;
      counterDisplay.innerHTML = counterNumber.toString();
    }
  }

}

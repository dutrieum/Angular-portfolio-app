import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() dataPage: any
  @Input() numberOfItem: any
  @Output() galleryNewTitle = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitGalleryNewTitle(value: string) {
    this.galleryNewTitle.emit(value);
  }

  onClickLikeButton(index : number, numberItem: number): void {
    const counterDisplay = document.querySelector('.counter_display[data-index = "'+ index +'"][data-number = "'+ numberItem + '"]');
    if (counterDisplay) {
      let counterString = counterDisplay.innerHTML;
      let counterNumber = Number(counterString);
      counterNumber++;
      counterDisplay.innerHTML = counterNumber.toString();
    }
  }

}

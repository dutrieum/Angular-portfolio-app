import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() dataPage: any
  galleryNewTitle : string = 'Here is the first gallery.';

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  onEmitGalleryNewTitle(event: string): void {
    this.galleryNewTitle = event;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}

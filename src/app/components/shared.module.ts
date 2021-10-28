import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./form/form.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ImageComponent} from "./image/image.component";
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    FormComponent,
    GalleryComponent,
    ImageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FormComponent,
    GalleryComponent,
    ImageComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

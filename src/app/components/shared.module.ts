import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./form/form.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ImageComponent} from "./image/image.component";
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {UsernameFormatPipe} from "../pipes/username-format.pipe";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    FormComponent,
    GalleryComponent,
    ImageComponent,
    HeaderComponent,
    UsernameFormatPipe,
  ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
  exports: [
    FormComponent,
    GalleryComponent,
    ImageComponent,
    HeaderComponent,
    UsernameFormatPipe,
  ]
})
export class SharedModule { }

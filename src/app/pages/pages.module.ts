import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from "./page-routing.module";

import {HomePageComponent} from "./home-page/home-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {FormComponent} from "../components/form/form.component";
import {GalleryComponent} from "../components/gallery/gallery.component";
import {ImageComponent} from "../components/image/image.component";
import {SharedModule} from "../components/shared.module";

@NgModule({
  declarations: [
    HomePageComponent,
    FormPageComponent,
    FormComponent,
    GalleryComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],
  exports: [
    FormComponent,
    GalleryComponent,
    ImageComponent,
  ]
})

export class PagesModule { }

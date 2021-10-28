import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from "./page-routing.module";

import {HomePageComponent} from "./home-page/home-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {SharedModule} from "../components/shared.module";

@NgModule({
  declarations: [
    HomePageComponent,
    FormPageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ]
})

export class PagesModule { }

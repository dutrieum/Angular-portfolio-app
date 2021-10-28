import { NgModule } from '@angular/core';

import {Router, RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {FormPageComponent} from "./form-page/form-page.component";

const routes: Routes = [
  {
    path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
    component: HomePageComponent
  },
  {
    path: 'form', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
    component: FormPageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }

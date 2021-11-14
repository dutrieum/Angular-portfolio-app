import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  favoriteThingsForm : FormGroup
  static readonly EMAIL = /^.+\@\S+\.\S+$/
  submittedValue : boolean = false;
  sentValue : boolean = false;

  constructor() {
    this.favoriteThingsForm = new FormGroup( {
      nameInput: new FormControl(null, [Validators.required]),
      emailInput: new FormControl(null, [Validators.required, Validators.pattern(FormComponent.EMAIL)]),
      drinkInput: new FormControl(null, [Validators.required]),
      foodInput: new FormControl(null, [Validators.required]),
      movieInput: new FormControl(null, [Validators.required]),
      singerInput: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.submittedValue = true;
    if (this.favoriteThingsForm.invalid) {
      return
    }
    this.showValidationMessage();
  }

  showValidationMessage() {
    this.sentValue = true;
  }

  generateNewForm() {
    this.sentValue = false;
    this.submittedValue = false;
    this.favoriteThingsForm.reset();
  }

}

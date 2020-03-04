import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted: boolean = false
  success = false
  messageForm: FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm () {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return
    }

    this.success = true
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ContactService } from '../service/contact.service';
import Contact from '../shared/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact;
  contactFormGroup: FormGroup;

  constructor(
    private contactService: ContactService,
    private location: Location,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createContact();
    this.createContactFormGroup();
  }

  private createContactFormGroup() {
    return this.contactFormGroup = this.formBuilder.group({
      position: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
    });
  }

  private createContact() {
    this.contact = {
      id: null,
      firstName: '',
      lastName: '',
      position: '',
      address: {
        street: '',
        city: '',
        state: '',
        zip: null,
      },
      phone: null,
      email: '',
      twitter: '',
      facebook: '',
      photo: ''
    };
  }

  addContact(): void {
    this.contactService.addContact(this.contact)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

import Contact from '../shared/models/contact';
import { ContactService } from '../service/contact.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-contact-dialog',
  templateUrl: './edit-contact-dialog.component.html',
  styleUrls: ['./edit-contact-dialog.component.css']
})
export class EditContactDialogComponent implements OnInit {
    contact: Contact;
    contactFormGroup: FormGroup;

    constructor(
        private contactService: ContactService,
        private dialogRef: MatDialogRef<EditContactDialogComponent>,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) contact) {
            this.contact = contact.contact;
        }
        
    ngOnInit() {
      this.createContactFormGroup();
    }

    private createContactFormGroup() {
        this.contactFormGroup = this.formBuilder.group({
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

    save() {
        this.dialogRef.close(this.contact);
        this.contactService.updateContact(this.contact).subscribe();
    }

    close() {
        this.dialogRef.close();
    }
}

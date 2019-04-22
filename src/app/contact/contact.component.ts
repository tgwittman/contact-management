import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import Contact from '../shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Input() contactFormGroup: FormGroup;
  
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import Contact from '../shared/models/contact';
import { ContactService } from '../service/contact.service';
import { EditContactDialogComponent } from '../edit-contact-dialog/edit-contact-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  contacts: Contact[];
  displayedColumns: string[];

  constructor(private contactService: ContactService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getContacts();
    this.displayedColumns = ['firstName', 'lastName', 'phone', 'email', 'twitter', 'facebook'];
  }

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  routeToAddContact(): void {
    this.router.navigateByUrl('/add-contact');
  }

  openDialog(row) {
    const dialogConfig = new MatDialogConfig();
   
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      contact: row
    };
   
    const dialogRef = this.dialog.open(EditContactDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );  
  }
}

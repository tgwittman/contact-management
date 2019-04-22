import { InMemoryDbService } from 'angular-in-memory-web-api';
import Contact from '../../shared/models/contact';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [
      { 
        id: 1, 
        firstName: 'David', 
        lastName: 'Ford',
        position: 'Senior Architect', 
        address: { 
          street: '1414  Woodrow Way',
          city: 'Huxley',
          state: 'TX',
          zip: '77000',
        },
        phone: '936-368-8155',
        email: 'dford@eaglepoint.com',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        photo: 'https://atlanticcityelectric.streetlightoutages.com/common/images/organizations/_default/unavailablePhoto.png'
      },
      { 
        id: 2, 
        firstName: 'Marion', 
        lastName: 'Otwell',
        position: 'Senior Software Engineer', 
        address: { 
          street: '1561  Pickens Way',
          city: 'Sherman',
          state: 'TX',
          zip: '75090',
        },
        phone: '903-375-7004',
        email: 'motwell@eaglepoint.com',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        photo: 'https://atlanticcityelectric.streetlightoutages.com/common/images/organizations/_default/unavailablePhoto.png'
      },
      { 
        id: 3, 
        firstName: 'Dorothy', 
        lastName: 'Brown',
        position: 'Product Team Lead',
        address: {
          street: '3557  Briarwood Drive',
          city: 'Laurel Springs',
          state: 'NJ',
          zip: '08021',
        },
        phone: '856-435-7566',
        email: 'dbrown@eaglepoint.com',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        photo: 'https://atlanticcityelectric.streetlightoutages.com/common/images/organizations/_default/unavailablePhoto.png'
      },
      { 
        id: 4, 
        firstName: 'Judy', 
        lastName: 'Rogers',
        position: 'Chief Executive Officer',
        address: {
          street: '2311  Irving Road',
          city: 'Worthington',
          state: 'OH',
          zip: '43085',
        },
        phone: '740-471-8627',
        email: 'jroger@eaglepoint.com',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        photo: 'https://atlanticcityelectric.streetlightoutages.com/common/images/organizations/_default/unavailablePhoto.png'
      },
      { 
        id: 5, 
        firstName: 'Joe', 
        lastName: 'Dalton',
        position: 'Accountant',
        address: {
          street: '3952  Davisson Street',
          city: 'Ridgeville',
          state: 'IN',
          zip: '47380',
        },
        phone: '765-857-0270',
        email: 'jdalton@eaglepoint.com',
        twitter: 'https://twitter.com/',
        facebook: 'https://facebook.com/',
        photo: 'https://atlanticcityelectric.streetlightoutages.com/common/images/organizations/_default/unavailablePhoto.png'
      }
    ];
    return {contacts};
  }

  // Overrides the genId method to ensure that a contact always has an id.
  // If the contacts array is empty,
  // the method below returns the initial number (11).
  // if the contacts array is not empty, the method below returns the highest
  // contact id + 1.
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 11;
  }
}
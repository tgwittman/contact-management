import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import Contact from '../shared/models/contact';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = 'api/contacts';

  constructor( private http: HttpClient) { }

  /** GET contacts from the server */
  getContacts (): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl)
      .pipe(
        catchError(this.handleError('getContacts', []))
      );
  }

  /** POST: add a new contact to the server */
  addContact (contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions).pipe(
      catchError(this.handleError<Contact>('addContact'))
    );
  }

  /** GET contact by id. Will 404 if id not found */
  getContact(id: number): Observable<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<Contact>(url).pipe(
      catchError(this.handleError<Contact>(`getContact id=${id}`))
    );
  }

  /** PUT: update the contact on the server */
  updateContact (contact: Contact): Observable<any> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      catchError(this.handleError<any>('updateContact'))
    );
  }
 
  /** DELETE: delete the contact from the server */
  deleteContact (contact: Contact | number): Observable<Contact> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
 
    return this.http.delete<Contact>(url, httpOptions).pipe(
      catchError(this.handleError<Contact>('deleteContact'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

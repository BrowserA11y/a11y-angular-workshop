import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Book {
  isbn: string;
  cover: string;
  title: string;
  abstract: string;
  author: string;
  publisher: string;
  numPages: number;
  price: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private http = inject(HttpClient);
  private endpoint = 'http://localhost:3000';

  create(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(`${this.endpoint}/books/`, book);
  }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }

  removeBook(book: Book) {
    return this.http.delete(`${this.endpoint}/books/${book.isbn}`);
  }

  getByIsbn(isbn: string): Observable<Book> {
    console.log('getByIsbn');
    return this.http.get<Book>(`${this.endpoint}/books/${isbn}`);
  }
}

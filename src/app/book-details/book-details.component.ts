import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailComponent {
  book$!: Observable<Book>;

  constructor(private readonly bookApi: BooksService) {}

  @Input({ required: true })
  set isbn(isbn: string) {
    console.log(isbn);
    this.book$ = this.bookApi.getByIsbn(isbn);
  }
}

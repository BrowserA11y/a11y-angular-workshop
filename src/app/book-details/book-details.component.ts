import { AsyncPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  imports: [AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailComponent {
  private readonly bookApi = inject(BooksService);

  book$!: Observable<Book>;

  @Input({ required: true })
  set isbn(isbn: string) {
    this.book$ = this.bookApi.getByIsbn(isbn);
  }
}

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
  ratings = ['rating1', 'rating2', 'rating3', 'rating4', 'rating5'];

  @Input({ required: true })
  set isbn(isbn: string) {
    this.book$ = this.bookApi.getByIsbn(isbn);
  }

  handleRating(rating: number) {
    console.log(rating);
  }
}

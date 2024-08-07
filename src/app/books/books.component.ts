import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { take, tap } from 'rxjs';
import { BookItemComponent } from '../books-item/book-item.component';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [BookItemComponent, AsyncPipe],
})
export class BooksComponent {
  private readonly bookService = inject(BooksService);
  #books!: Book[];
  public books$ = this.bookService.getAll().pipe(
    take(1),
    tap((books: Book[]) => (this.#books = books))
  );

  removeBook(bookToRemove: Book, i: number) {
    this.bookService
      .removeBook(bookToRemove)
      .pipe(take(1))
      .subscribe(() => {
        this.#books.splice(i, 1);
      });
  }
}

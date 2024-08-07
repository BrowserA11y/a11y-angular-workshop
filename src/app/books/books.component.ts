
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { BookItemComponent } from '../books-item/book-item.component';
import { Book, BooksService } from '../books.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    imports: [BookItemComponent],
    providers: []
})
export class BooksComponent implements OnInit {
  public books!: Book[];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService
      .getAll()
      .pipe(take(1))
      .subscribe((books: Book[]) => (this.books = books));
  }

  removeBook(bookToRemove: Book, i: number) {
    this.bookService
      .removeBook(bookToRemove)
      .pipe(take(1))
      .subscribe(() => {
        this.books.splice(i, 1);
      });
  }
}

import { FocusMonitor } from '@angular/cdk/a11y';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { Subscription, take, tap } from 'rxjs';
import { BookItemComponent } from '../books-item/book-item.component';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  imports: [BookItemComponent, AsyncPipe],
})
export class BooksComponent implements OnDestroy {
  private readonly bookService = inject(BooksService);
  #books!: Book[];
  public books$ = this.bookService.getAll().pipe(
    take(1),
    tap((books: Book[]) => (this.#books = books))
  );
  private focusMonitor = inject(FocusMonitor);
  private subscription = Subscription.EMPTY;

  removeBook(bookToRemove: Book, i: number) {
    this.subscription = this.bookService
      .removeBook(bookToRemove)
      .pipe(take(1))
      .subscribe(() => {
        this.#books.splice(i, 1);
        this.focusOnNextBook(i);
      });
  }

  private focusOnNextBook(i: number) {
    // Nur in browser
    let nextBook = document.getElementById((i + 1).toString());
    if (!nextBook) {
      // If there is no next element (last element deleted) take the previous one)
      nextBook = document.getElementById((i - 1).toString());
    }
    if (!nextBook) {
      // Fallback: focus on main
      nextBook = document.getElementById('main');
    }
    console.log(nextBook);
    // Was kann man denn hier focussieren?
    // https://allyjs.io/data-tables/focusable.html
    // Or use InteractivityChecker
    // if (nextBook) nextBook.getElementsByTagName('button')[0].focus();
    if (nextBook && nextBook.getElementsByTagName('button')[0])
      this.focusMonitor.focusVia(
        nextBook.getElementsByTagName('button')[0] as HTMLElement,
        'keyboard'
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

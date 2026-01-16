import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from '../books.service';

import { form, FormField, required } from '@angular/forms/signals';

interface BookData {
  isbn: string;
  title: string;
  cover: string;
  author: string;
  abstract: string;
}

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  imports: [FormField],
})
export class NewBookComponent implements OnDestroy {
  private readonly bookService = inject(BooksService);
  bookApiSubscription = new Subscription();

  #bookModel = signal<BookData>({
    isbn: '',
    title: '',
    cover: '',
    author: '',
    abstract: '',
  });

  readonly form = form(this.#bookModel, (schemaPath) => {
    required(schemaPath.isbn, { message: 'ISBN is required' });
    required(schemaPath.title, { message: 'Title is required' });
  });

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  create(): void {
    if (this.form().invalid()) return;

    this.bookApiSubscription.add(
      this.bookService.create(this.form().value()).subscribe()
    );
  }
}

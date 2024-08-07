import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
  imports: [ReactiveFormsModule],
})
export class NewBookComponent implements OnDestroy {
  private readonly bookService = inject(BooksService);
  private readonly form = inject(FormBuilder);

  newForm = this.buildForm();
  bookApiSubscription = new Subscription();

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
  }

  create(): void {
    if (this.newForm.invalid) return;

    this.bookApiSubscription.add(
      this.bookService.create(this.newForm.getRawValue()).subscribe()
    );
  }

  private buildForm() {
    return this.form.nonNullable.group({
      isbn: ['', [Validators.required]],
      title: ['', [Validators.required]],
      cover: [''],
      author: [''],
      abstract: [''],
    });
  }
}

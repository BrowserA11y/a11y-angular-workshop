import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BooksService } from '../books.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-new-book',
    templateUrl: './new-book.component.html',
    styleUrls: ['./new-book.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf],
})
export class NewBookComponent implements OnDestroy {
  newForm = this.buildForm();
  bookApiSubscription = new Subscription();

  constructor(private form: FormBuilder, private bookService: BooksService) {}

  ngOnDestroy(): void {
    this.bookApiSubscription.unsubscribe();
    this.newForm.controls;
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

import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  imports: [RouterLink],
})
export class BookItemComponent {
  public book = input.required<Book>();
  public bookRemoved = output<void>();

  removeBook() {
    this.bookRemoved.emit();
  }
}

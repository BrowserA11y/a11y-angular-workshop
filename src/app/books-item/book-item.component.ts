import { CdkMonitorFocus, FocusOrigin } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  Component,
  inject,
  input,
  NgZone,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../books.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  imports: [CdkMonitorFocus, RouterLink],
})
export class BookItemComponent {
  private _ngZone = inject(NgZone);
  private _cdr = inject(ChangeDetectorRef);

  public book = input.required<Book>();
  public bookRemoved = output<void>();
  public elementOrigin = this.formatOrigin(null);

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
  markForCheck() {
    this._ngZone.run(() => this._cdr.markForCheck());
  }

  removeBook() {
    this.bookRemoved.emit();
  }
}

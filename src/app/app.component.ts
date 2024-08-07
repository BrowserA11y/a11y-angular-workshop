import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, NavigationComponent],
})
export class AppComponent {
  private router = inject(Router);
  skipLinkPath = '';

  //Angular focus 4: Fix navigation - focus on the first header on the page + Alternative way to handle navigation
  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        // https://medium.com/@belwerks/a-quick-note-on-skip-links-in-angular-3641a0e32a7a
        this.skipLinkPath = `${this.router.url}#content`;
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      });
  }
}

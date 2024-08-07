import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NavigationComponent],
})
export class AppComponent {
  //Angular focus 4: Fix navigation - focus on the first header on the page + Alternative way to handle navigation
  constructor(private router: Router) {
    console.log(this.router.url);
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const main = document.querySelector('main');
        if (main) {
          (main as HTMLElement).focus();
        }
      });
  }
}

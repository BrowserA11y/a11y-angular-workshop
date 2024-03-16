import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterLinkActive, RouterLink, RouterOutlet, NavigationComponent],
})
export class AppComponent {
  //Angular focus 4: Fix navigation - focus on the first header on the page + Alternative way to handle navigation
}

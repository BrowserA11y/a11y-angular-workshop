import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, NavigationComponent],
})
export class AppComponent {
  //Angular focus 4: Fix navigation - focus on the first header on the page + Alternative way to handle navigation
}

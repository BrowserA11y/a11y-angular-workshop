
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**https://inclusive-components.design/menus-menu-buttons/ */

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    imports: [RouterLink, RouterLinkActive]
})
export class NavigationComponent {
  menuItems = [
    { url: 'new-book', title: 'New book' },
    { url: 'books', title: 'Books' },
    { url: 'about', title: 'About Accessible Reads' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'squares-game';
  squares=[0, 1, 2, 3, 4, 5, 6, 7, 8]
}

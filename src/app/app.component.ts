import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    animation: {
      path: '/assets/animations/walk/',
      images: [
        '1.png',
        '2.png',
        '3.png',
        '4.png'
      ]
    },
    times: [
      500,
      500,
      500,
      500
    ]
  }
}

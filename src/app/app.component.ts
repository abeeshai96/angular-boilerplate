import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'Angular Boilerplate';
  jsonData!: string;

  fetchData() {
    this.appService.getData().subscribe({
      next: (response) => {
        this.jsonData = JSON.stringify(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}

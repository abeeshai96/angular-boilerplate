import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppService } from './services';
import { UserProfileModel } from './models';
import { UserProfileViewMapper } from './mappers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private appService: AppService) {}

  title = 'Angular Boilerplate';
  jsonData = <UserProfileModel[]>[];

  fetchData() {
    this.appService.getData().subscribe({
      next: (response) => {
        this.jsonData = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  clearData() {
    this.jsonData = <UserProfileModel[]>[];
  }
}

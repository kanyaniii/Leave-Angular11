import { Component } from '@angular/core';
import { ThemeService } from './ThemeService/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Leave-Angular';

  isDarkMode = false;

  constructor(private themeService: ThemeService) {
    this.checkTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.checkTheme();
  }

  checkTheme() {
    this.isDarkMode = document.body.classList.contains('dark-mode');
  }
}

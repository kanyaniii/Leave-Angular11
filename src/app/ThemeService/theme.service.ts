import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem(this.themeKey, isDarkMode ? 'dark' : 'light');
  }

  loadTheme(): void {
    const savedTheme = localStorage.getItem(this.themeKey) as 'light' | 'dark' | null;
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}

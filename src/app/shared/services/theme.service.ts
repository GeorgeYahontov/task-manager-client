import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

/** Theme manager using data-theme on <html> */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private current: Theme = 'light';

  constructor() {
    const saved = (localStorage.getItem('theme') as Theme) || null;
    const initial: Theme = saved ?? 'light';
    this.apply(initial);
  }

  get theme(): Theme { return this.current; }

  toggle(): void { this.apply(this.current === 'light' ? 'dark' : 'light'); }

  apply(theme: Theme): void {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}

import { Component } from '@angular/core';
import { ThemeService } from '@shared/services/theme.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button mat-fab class="theme-toggle" (click)="toggle()" aria-label="Toggle theme">
      {{ svc.theme === 'light' ? '🌙' : '☀️' }}
    </button>
  `,
  styles: [`
    .theme-toggle {
      position: fixed;
      top: 16px;
      right: 16px;
      z-index: 1000;
    }
  `]
})
export class ThemeToggleComponent {
  constructor(public svc: ThemeService) {}
  toggle() { this.svc.toggle(); }
}

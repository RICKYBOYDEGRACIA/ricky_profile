import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<Theme>('light');

  constructor() {
    this.initTheme();
  }

  private initTheme() {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Initial load without transition animation
    this.applyThemeClass(initialTheme);
    this.currentTheme.set(initialTheme);
  }

  toggleThemeWithAnimation(targetTheme: Theme, event?: MouseEvent) {
    // Fallback if browser doesn't support View Transitions or event isn't provided
    if (!document.startViewTransition || !event) {
      this.setTheme(targetTheme);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    // Calculate maximum radius needed to cover the entire screen from the click point
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    // Start the View Transition
    const transition = document.startViewTransition(() => {
      this.setTheme(targetTheme);
    });

    transition.ready.then(() => {
      // Animate the new state growing out from click coordinates
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  }

  setTheme(theme: Theme) {
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);
    this.applyThemeClass(theme);
  }

  private applyThemeClass(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
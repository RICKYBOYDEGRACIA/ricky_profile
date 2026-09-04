import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBar } from "./components/side-bar/side-bar";
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    SideBar
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isMenuOpen = signal(false);

  toggleMenu(){
    this.isMenuOpen.update(prev => !prev);
  }

  closeMenu(){
    this.isMenuOpen.set(false);
  }
}

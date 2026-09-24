import { Component, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SideBar } from "./components/side-bar/side-bar";
import { injectSpeedInsights } from '@vercel/speed-insights';

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
export class App implements OnInit {
  itemClicked = output<void>();

  constructor(
    public router: Router
  ) {
    
  }
  ngOnInit(): void{
    injectSpeedInsights();
  }
  isMenuOpen = signal(false);

  toggleMenu(){
    this.isMenuOpen.update(prev => !prev);
  }

  closeMenu(){
    this.isMenuOpen.set(false);
  }

  home(){
    this.router.navigate(['/']);
    this.itemClicked.emit();
  }
}

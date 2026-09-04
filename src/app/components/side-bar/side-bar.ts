import { Component, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Theme, ThemeService } from '../../services/theme';

type SideBarItem = {
  name: string,
  icon?: string,
  route: string
}
@Component({
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
  host: {
    class: 'block h-full' // Forces the <app-side-bar> element to take full height
  }
})
export class SideBar {
  itemClicked = output<void>();

  constructor(
    private router: Router,
    public themeService: ThemeService
  ) {

  }

  sideBarItems: SideBarItem[] = [
    {
      name: "Experience",
      icon: "experience.png",
      route: "./experiences"
    },
    {
      name: "Projects",
      icon: "project.png",
      route: "/projects"
    },
    {
      name: "Certifications",
      icon: "certificate.png",
      route: "/certificates"
    },
    {
      name: "Gears",
      icon: "gears.png",
      route: "/gears"
    },
    {
      name: "Blogs",
      icon: "blogs.png",
      route: "/blogs"
    }
  ]

  home(){
    this.router.navigate(['/']);
    this.itemClicked.emit();
  }

  switchTheme(theme: Theme, event: MouseEvent) {
    this.themeService.toggleThemeWithAnimation(theme, event);
  }
}

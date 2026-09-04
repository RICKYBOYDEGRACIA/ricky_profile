import { Component, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

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
})
export class SideBar {
  itemClicked = output<void>();

  constructor(
    private router: Router) {

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
}

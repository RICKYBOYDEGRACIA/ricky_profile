import { Component } from '@angular/core';

type SideBarItem = {
  name: string,
  icon?: string,
  route: string
}
@Component({
  imports: [],
  selector: 'app-side-bar',
  styleUrl: './side-bar.css',
  templateUrl: './side-bar.html',
})
export class SideBar {


  sideBarItems: SideBarItem[] = [
    {
      name: "Home",
      icon: "home.png",
      route: "/"
    },
    {
      name: "Experience",
      icon: "experience.png",
      route: "/experience"
    },
    {
      name: "Projects",
      icon: "project.png",
      route: "/projects"
    },
    {
      name: "Certifications",
      icon: "certificate.png",
      route: "/certifications"
    },
    {
      name: "Gears",
      icon: "gears.png",
      route: "/gears"
    },
    {
      name: "Blogs",
      icon: "blogs.png",
      route: "/"
    }
  ]
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Experience = {
  title: string;
  company: string;
  startEndDate: string;
};
type TechStack = {
  path: string;
  alt: string;
  tooltip?: string;
};

type Gear = {
  name: string;
  description: string;
  imagePath: string;
  link: string;
};
@Component({
  imports: [],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage {
  constructor(
    private router: Router,
  ) {}

  experiences: Experience[] = [
    {
      title: 'Junior Engineer, Full-time',
      company: 'reach52',
      startEndDate: 'Jan, 2023 - Present',
    },
    {
      title: 'Junior Engineer, Intern',
      company: 'reach52',
      startEndDate: 'Sep, 2022 - Dec, 2022',
    }
  ]

  techStacks: TechStack[] = [
    {
      path: 'angular.png',
      alt: 'Angular',
      tooltip: 'Angular 22'
    },
    {
      path: 'react.png',
      alt: 'React.js',
      tooltip: 'React.js'
    },
    {
      path: 'tailwind.png',
      alt: 'Tailwind CSS',
      tooltip: 'Tailwind CSS'
    },
    {
      path: 'typescript.png',
      alt: 'TypeScript',
      tooltip: 'TypeScript'
    },
    {
      path: 'javascript.png',
      alt: 'JavaScript',
      tooltip: 'JavaScript'
    },
    {
      path: 'html.png',
      alt: 'HTML',
      tooltip: 'HTML'
    },
    {
      path: 'css.png',
      alt: 'CSS',
      tooltip: 'CSS'
    },
    {
      path: 'bitbucket.png',
      alt: 'Bitbucket',
      tooltip: 'Bitbucket'
    },
    {
      path: 'github.png',
      alt: 'GitHub',
      tooltip: 'GitHub'
    },
    {
      path: 'git.png',
      alt: 'Git',
      tooltip: 'Git'
    },
    {
      path: 'npm.png',
      alt: 'NPM',
      tooltip: 'NPM'
    },
  ]

  gears: Gear[] = [
    {
      name: 'Soundcore r50i',
      description: 'Headphones',
      imagePath: 'soundcore.webp',
      link: "https://service.soundcore.com/product-description/a085g00000GjIPnAAN",
    },
    {
      name: 'Logitech M650',
      description: 'Mouse',
      imagePath: 'mouse.webp',
      link: "https://www.logitech.com/en-us/shop/p/m650-signature-wireless-mouse"
    },
    {
      name: 'Rakk Kludge rk61',
      description: 'Keyboard',
      imagePath: 'keyboard.webp',
      link: "https://rkgamingstore.com/products/rk61-60-percent-keyboard"
    },
    {
      name: 'Lenovo IdeaPad 3 Slim 3',
      description: 'Laptop',
      imagePath: 'laptop.webp',
      link: "https://www.lenovo.com/us/en/p/laptops/ideapad/ideapad-300/ideapad-3-gen-5-15-inch-intel/len101i0006"
    },
    {
      name: 'Benq Monitor GW2283 ISP Led',
      description: 'Monitor',
      imagePath: 'monitor.webp',
      link: "https://www.benq.com/en-us/monitor/home/gw2283.html"
    }
  ]

  goto(page:string) {
    switch(page) {
      case 'experience':
        this.router.navigate(['./experiences']);
        break;
      case 'projects':
        this.router.navigate(['/projects']);
        break;
      case 'gears':
        this.router.navigate(['/gears']);
        break;
      case 'blogs':
        this.router.navigate(['/blogs']);
        break;
      case 'certificates':
        this.router.navigate(['/certificates']);
        break;
      default:
        break;
    }
  }
}

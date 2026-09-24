import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience, Gear } from '../../data/interfaces/common';
import { Stack } from '../../data/common/tech-stack';
import { experiences } from '../../data/common/experiences';
import { Gears } from '../../data/common/gear';
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

  techStacks = Stack;
  gears = Gears;
  experiences = experiences

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
      case 'tech-stack':
        this.router.navigate(['/tech-stack']);
        break;
      default:
        break;
    }
  }
}

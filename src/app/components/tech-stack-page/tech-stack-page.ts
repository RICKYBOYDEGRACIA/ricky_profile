import { Component } from '@angular/core';
import { Stack } from '../../data/common/tech-stack';

@Component({
  imports: [],
  selector: 'app-tech-stack-page',
  styleUrl: './tech-stack-page.css',
  templateUrl: './tech-stack-page.html',
})
export class TechStackPage {

  techStack = Stack;
  
}

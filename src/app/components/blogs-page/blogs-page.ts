import { Component } from '@angular/core';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  link?: string;
};

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [],
  styleUrl: './blogs-page.css',
  templateUrl: './blogs-page.html',
})
export class BlogsPage {
  blogs: BlogPost[] = [
    {
      id: '1',
      title: 'Building Custom UI Components with Angular Signals & Tailwind CSS v4',
      excerpt: 'A practical guide on leveraging Angular Signals for state management while building scalable, accessible UI elements with Tailwind v4.',
      publishedDate: '2026-02-15',
      readTime: '5 min read',
      tags: ['Angular', 'Tailwind CSS', 'Web Dev']
    },
    {
      id: '2',
      title: 'Optimizing Responsive Layouts with CSS Grid and Flexbox',
      excerpt: 'How to structure dual-scroll persistent sidebars, dynamic timelines, and adaptive cards without breaking mobile viewports.',
      publishedDate: '2026-01-28',
      readTime: '4 min read',
      tags: ['CSS', 'Frontend', 'Responsive']
    }
  ];
}
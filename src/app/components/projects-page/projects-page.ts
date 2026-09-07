import { Component, signal, computed } from '@angular/core';

export type Project = {
  id: string;
  title: string;
  description: string;
  category: 'professional' | 'personal';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isFeatured?: boolean;
};

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [],
  styleUrl: './projects-page.css',
  templateUrl: './projects-page.html',
})
export class ProjectsPage {
  // Active Filter Signal: 'all' | 'professional' | 'personal'
  activeFilter = signal<'all' | 'professional' | 'personal'>('all');

  projects: Project[] = [
    {
      id: '1',
      title: 'Custom Angular & Tailwind Component Library',
      description: 'An internal, reusable UI component library engineered with Angular Standalone Components and Tailwind CSS to standardize UI/UX across web applications.',
      category: 'professional',
      tags: ['Angular', 'Tailwind CSS', 'TypeScript', 'UI/UX System'],
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Global Health Digital Platform',
      description: 'Core frontend web application supporting digital health access across global platforms, featuring dynamic reactive forms and custom validation pipelines.',
      category: 'professional',
      tags: ['Angular', 'Reactive Forms', 'REST API', 'Agile'],
      isFeatured: true,
    },
  ];

  // Filtered List Computation
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter((p) => p.category === filter);
  });

  setFilter(category: 'all' | 'professional' | 'personal') {
    this.activeFilter.set(category);
  }
}
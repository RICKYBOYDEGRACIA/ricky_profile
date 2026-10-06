import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home-page/home-page').then(m => m.HomePage),
        title: 'Home',
        data: {
            description: 'Portfolio of Ricky Boy De Gracia — Frontend Web Developer with nearly 4 years of hands-on experience building modern web applications with Angular, React.js, and TypeScript.'
        }
    },
    {
        path: 'sidebar',
        loadComponent: () => import('./components/side-bar/side-bar').then(m => m.SideBar)
    },
    {
        path: 'certificates',
        loadComponent: () => import('./components/certificates-page/certificates-page').then(m => m.CertificatesPage),
        title: 'Certificates',
        data: {
            description: 'Professional certifications, technical credentials, and continuous learning achievements of Ricky Boy De Gracia.'
        }
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects-page/projects-page').then(m => m.ProjectsPage),
        title: 'Projects',
        data: {
            description: 'Featured engineering deliverables, enterprise UI component libraries, and active software builds crafted by Ricky Boy De Gracia.'
        }
    },
    {
        path: 'gears',
        loadComponent: () => import('./components/gears-page/gears-page').then(m => m.GearsPage),
        title: 'Gears',
        data: {
            description: 'Development hardware, productivity setup, and daily engineering gear used by Ricky Boy De Gracia.'
        }
    },
    {
        path: 'blogs',
        loadComponent: () => import('./components/blogs-page/blogs-page').then(m => m.BlogsPage),
        title: 'Blogs',
        data: {
            description: 'Technical write-ups, frontend tutorials, and insights on Angular, TypeScript, and modern web development by Ricky Boy De Gracia.'
        }
    },
    {
        path: 'experiences',
        loadComponent: () => import('./components/experiences-page/experiences-page').then(m => m.ExperiencesPage),
        title: 'Experience',
        data: {
            description: 'Career history and engineering milestones of Ricky Boy De Gracia, including enterprise frontend work at reach52.'
        }
    },
    {
        path: 'tech-stack',
        loadComponent: () => import('./components/tech-stack-page/tech-stack-page').then(m => m.TechStackPage),
        title: 'Tech Stack',
        data: {
            description: 'Technologies, languages, and frameworks mastered by Ricky Boy De Gracia: Angular, React, TypeScript, Tailwind CSS, Git, and REST APIs.'
        }
    }
];

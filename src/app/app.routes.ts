import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home-page/home-page').then(m => m.HomePage)  
    },
    {
        path: 'sidebar',
        loadComponent: () => import('./components/side-bar/side-bar').then(m => m.SideBar)  
    },
    {
        path: 'certificates',
        loadComponent: () => import('./components/certificates-page/certificates-page').then(m => m.CertificatesPage)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects-page/projects-page').then(m => m.ProjectsPage)
    },
    {
        path: 'certificates',
        loadComponent: () => import('./components/certificates-page/certificates-page').then(m => m.CertificatesPage)
    },
    {
        path: 'gears',
        loadComponent: () => import('./components/gears-page/gears-page').then(m => m.GearsPage)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./components/blogs-page/blogs-page').then(m => m.BlogsPage)
    },
    {
        path: 'experiences',
        loadComponent: () => import('./components/experiences-page/experiences-page').then(m => m.ExperiencesPage)
    }

];

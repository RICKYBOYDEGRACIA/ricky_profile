import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta
  ) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const rawTitle = this.buildTitle(routerState);
    const pageTitle = rawTitle && rawTitle !== 'Home'
      ? `${rawTitle} | Ricky Boy De Gracia - Frontend Developer`
      : 'Ricky Boy De Gracia | Frontend Web Developer';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'title', content: pageTitle });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });

    // Traverse to the deepest active route to read custom data
    let currentRoute = routerState.root;
    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
    }

    const description = (currentRoute.data && currentRoute.data['description'])
      ? currentRoute.data['description']
      : 'Portfolio of Ricky Boy De Gracia — Frontend Web Developer specializing in Angular, React.js, TypeScript, and Tailwind CSS.';

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'collections',
    pathMatch: 'full',
  },
  {
    path: 'collections',
    loadComponent: () => import('./pages/collections/collections.page').then( m => m.CollectionsPage)
  },
  {
    path: 'kids',
    loadComponent: () => import('./pages/kids/kids.page').then( m => m.KidsPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'feedback',
    loadComponent: () => import('./pages/feedback/feedback.page').then( m => m.FeedbackPage)
  },
];

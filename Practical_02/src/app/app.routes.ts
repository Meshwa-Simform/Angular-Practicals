import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path:'', 
        loadComponent: () => import('./components/home-note/home-note.component').then(m => m.HomeNoteComponent)
    },
    { 
        path:'note/:id', 
        loadComponent: () => import('./components/notes-detail/notes-detail.component').then(m => m.NotesDetailComponent)
    },
    {
        path: 'add',
        loadComponent: () => import('./components/form-note/form-note.component').then(m => m.FormNoteComponent)
    },
    {
        path: 'edit/:id',
        loadComponent: () => import('./components/form-note/form-note.component').then(m => m.FormNoteComponent)
    },
    {
        path: 'new',
        loadComponent: () => import('./components/form-note/form-note.component').then(m => m.FormNoteComponent)
    },
    {
        path: '**',
        loadComponent: () =>import('./components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    }
];

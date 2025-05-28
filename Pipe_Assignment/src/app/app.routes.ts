import { Routes } from '@angular/router';
import { DisplayUserComponent } from './component/display-user/display-user.component';

export const routes: Routes = [
    { path: 'users', component: DisplayUserComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];

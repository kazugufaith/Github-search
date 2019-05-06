import { Routes } from '@angular/router';

import { ReposComponent } from '../repos/repos.component';
import { UserComponent } from '../user/user.component';


export const routes: Routes = [
    { path: 'home', component: UserComponent },
    { path: 'repos', component: ReposComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

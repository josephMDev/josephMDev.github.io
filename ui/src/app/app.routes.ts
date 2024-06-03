import { Routes } from '@angular/router';
import { CubeComponent } from './cube/cube.component';

export const routes: Routes = [
    {path: 'home', component: CubeComponent},
    {path: '**', redirectTo: 'home'}
];

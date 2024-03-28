import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeartComponent } from './heart/heart.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'test', component:HeartComponent}
];

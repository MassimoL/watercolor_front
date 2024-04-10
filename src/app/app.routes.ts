import { Routes } from '@angular/router';
import { PaintingsListComponent } from './pages/paintings-list/paintings-list.component';
import { HomeComponent } from './pages/home/home.component';

import { PaintingsPageComponent } from './pages/paintings-page/paintings-page.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'paintings',
    component: PaintingsListComponent,
 
  },
  {
    path: 'paintings-page',
    component: PaintingsPageComponent,

  },
  {
    path: 'paintings-page/:painting_id',
    component: PaintingsPageComponent
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

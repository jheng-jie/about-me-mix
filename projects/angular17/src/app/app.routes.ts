import { Routes } from '@angular/router'
import { DefaultLayout } from '../layouts/default/default.component'
import { NormalLayout } from '../layouts/normal/normal.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  { path: '', component: DefaultLayout, children: [{ path: 'home', component: HomeComponent }] },
  { path: '', redirectTo: `/home`, pathMatch: 'full' },
]

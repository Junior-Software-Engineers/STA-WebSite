import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards';
import {
  ClientLayoutComponent,
  AdminLayoutComponent,
} from './components/layouts';
import {
  HomepageComponent,
  DashboardComponent,
  LoginComponent,
  InstituonalListingComponent,
  SignUpComponent, 
  UserListComponent
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [{ path: '', component: HomepageComponent }],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard', icon: 'fa fa-3x fa-home' },
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: { title: 'Sign Up', icon: 'fa fa-3x fa-user' },
      },
      {
        path: 'institution-listing',
        component: InstituonalListingComponent,
        data: { title: 'Institution List', icon: 'fa fa-3x fa-university' },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: { title: 'User List', icon: 'fas fa-3x fa-users' },
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [];

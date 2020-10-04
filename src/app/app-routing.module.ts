import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards';
import { Roles } from './models/roles';

import {
  ClientLayoutComponent,
  AdminLayoutComponent,
} from './components/layouts';
import {
  HomepageComponent,
  DashboardComponent,
  LoginComponent,
  InstitutionListComponent,
  AddUserComponent,
  AddInstitutionComponent,
  UserListComponent,
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
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: { title: 'Dashboard', icon: 'fa fa-2x fa-home' },
      },
      {
        path: 'user/add',
        component: AddUserComponent,
        data: {
          title: 'User Add',
          icon: 'fa fa-2x fa-user',
          authorize: [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin],
        },
      },
      {
        path: 'institutions',
        component: InstitutionListComponent,
        data: {
          title: 'Institution List',
          icon: 'fa fa-2x fa-university',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'institution/add',
        component: AddInstitutionComponent,
        data: {
          title: 'Institution Add',
          icon: 'fa fa-2x fa-university',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'institution/edit/:InstitutionID',
        component: AddInstitutionComponent,
        data: {
          title: 'Institution Edit',
          icon: 'fa fa-2x fa-university',
          authorize: [Roles.Root, Roles.Administrator],
        },
      },
      {
        path: 'users',
        component: UserListComponent,
        data: {
          title: 'User List',
          icon: 'fa fa-2x fa-users',
          authorize: [Roles.Root, Roles.Administrator, Roles.InstitutionAdmin],
        },
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminControlSidebarComponent } from '../admin-control-sidebar/admin-control-sidebar.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatMenuModule } from '@angular/material/menu';
import { NgSearchFilterModule } from 'ng-search-filter';
import { CKEditorModule } from 'ckeditor4-angular';
import { QRCodeModule } from 'angularx-qrcode';
import {
  InstitutionInfoDialogComponent,
  QrCodeDialogComponent,
  UserInfoDialogComponent,
  DialogWindowComponent,
  ChangePasswordModalComponent,
  MartyrImageDialogComponent
} from '../../';
import {
  DashboardComponent,
  LoginComponent,
  AddUserComponent,
  AddInstitutionComponent,
  InstitutionListComponent,
  AddMartyrComponent,
  MartyrListComponent,
  UserListComponent,
} from '../../../../pages/admin';
import { MatNativeDateModule } from '@angular/material/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AdminLayoutComponent,
    QrCodeDialogComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    MartyrImageDialogComponent,
    AdminControlSidebarComponent,
    AdminSidebarComponent,
    DashboardComponent,
    LoginComponent,
    AddUserComponent,
    AddInstitutionComponent,
    InstitutionListComponent,
    AddMartyrComponent,
    MartyrListComponent,
    UserListComponent,
    DialogWindowComponent,
    ChangePasswordModalComponent,
    InstitutionInfoDialogComponent,
    UserInfoDialogComponent,
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    RouterModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CKEditorModule,
    MatMomentDateModule,
    MatMenuModule,
    NgSearchFilterModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
})
export class AdminLayoutModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { DevicesComponent } from './views/devices/devices.component';
import { ZonesComponent } from './views/zones/zones.component';
import { UsersComponent } from './views/users/users.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { SchedulersComponent } from './views/schedulers/schedulers.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { DevicesDetailsComponent } from './views/devices-details/devices-details.component';
import { DxChartModule } from 'devextreme-angular';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    ZonesComponent,
    AlertsComponent,
    SchedulersComponent,
    DevicesDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,

    // devExtreeme modules :
    DxChartModule,
    // standAlone module
    LoginComponent,
    SignUpComponent,

    LayoutModule,
    UsersComponent,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatPaginatorModule  ,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

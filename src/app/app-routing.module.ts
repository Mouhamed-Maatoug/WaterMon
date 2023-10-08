import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { UsersComponent } from './views/users/users.component';
import { DevicesComponent } from './views/devices/devices.component';
import { AlertsComponent } from './views/alerts/alerts.component';
import { SchedulersComponent } from './views/schedulers/schedulers.component';
import { ZonesComponent } from './views/zones/zones.component';
import { DevicesDetailsComponent } from './views/devices-details/devices-details.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'signUp', component:SignUpComponent},
  {path: 'watermon', component:LayoutComponent ,
  children : [
        {path: 'details', component:DevicesDetailsComponent},
        {path: '', redirectTo:'zones' , pathMatch : 'full'},
        {path: 'zones', component:ZonesComponent},
        {path: 'users', component:UsersComponent},
        {path: 'devices', component:DevicesComponent},
        {path: 'alerts', component:AlertsComponent},
        {path: 'schedulers', component:SchedulersComponent}
      ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

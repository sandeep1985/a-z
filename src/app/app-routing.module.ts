import { NgModule } from '@angular/core';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { UsersComponent }      from './users/users.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { 
      path: '', 
      component: SiteLayoutComponent,
      children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'users', component: UsersComponent }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
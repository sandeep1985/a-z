import { NgModule } from '@angular/core';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { UsersComponent }      from './users/users.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
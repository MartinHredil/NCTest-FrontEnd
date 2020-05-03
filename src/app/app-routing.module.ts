import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { UsersTableComponent } from './pages/users-table/users-table.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'register-user', pathMatch: 'full' },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'users-table', component: UsersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

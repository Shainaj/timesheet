import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeavedetailComponent } from './leavedetail/leavedetail.component';
import { LeavelistComponent } from './leavelist/leavelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    
    path: "leavelist", component: LeavelistComponent
    
  },
  {
    path: 'leavedetails/:id', component: LeavedetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

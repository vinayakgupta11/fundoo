import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import{AuthGuard} from '../app/auth-guard/auth.guard'
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';



const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgotComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children:[
    {
      path:'display-notes', component:DisplayNotesComponent
    },
    {
      path:'trash', component:TrashComponent
    },
    {
      path:'archive', component:ArchiveComponent
    }
  ]
},
  { path: 'resetpassword/:token', component: ResetComponent },
  {path:'**', redirectTo:'/login'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
import { SerachComponent } from './component/serach/serach.component';
import { LabelDisplayComponent } from './component/label-display/label-display.component';
import { QuesAnsComponent } from './component/ques-ans/ques-ans.component';
import { SelectRegComponent } from './component/select-reg/select-reg.component';
import { CartComponent } from './component/cart/cart.component';
import { RemindersComponent } from './component/reminders/reminders.component';



const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'},
  
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgotComponent },
  { path: 'SelectReg', component: SelectRegComponent },
  
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
  children:[
    {
      path:'display-notes', component:DisplayNotesComponent
    },
    {
      path:'trash', component:TrashComponent
    },
    {
      path:'Reminders', component:RemindersComponent
    },
    {
      path:'archive', component:ArchiveComponent
    },
    {
      path:'serach', component:SerachComponent
    },
    {path : 'label/:label', component : LabelDisplayComponent},

    {path : 'questionAnswer/:noteId', component : QuesAnsComponent},
    { path: 'shoppingCart', component: CartComponent },

  ]
},
  { path: 'resetpassword/:id', component: ResetComponent },
  {path:'**', redirectTo:'/login'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

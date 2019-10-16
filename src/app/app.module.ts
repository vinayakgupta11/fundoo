import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{AppMaterialModule}from  './angular-material/app.material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './services/user-services/User.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { IconComponent } from './component/icon/icon.component';
import { NotesComponent } from './component/notes/notes.component';
import{AuthGuard} from '../app/auth-guard/auth.guard';
import { AuthService } from '../app/services/auth/auth.service';
import { CardsComponent } from './component/cards/cards.component';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { TrashComponent } from './component/trash/trash.component';

import { ArchiveComponent } from './component/archive/archive.component';
import { DialogueComponent } from './component/dialogue/dialogue.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UploadImageComponent } from './component/upload-image/upload-image.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ForgotComponent,
    ResetComponent,
    DashboardComponent,
    IconComponent,
    NotesComponent,
    CardsComponent,
    DisplayNotesComponent,
    TrashComponent,
    
    ArchiveComponent,
    
    DialogueComponent,
    
    UploadImageComponent,
    
    
  ],
  entryComponents : [DialogueComponent,UploadImageComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    TestService,AuthGuard, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
{

  
}
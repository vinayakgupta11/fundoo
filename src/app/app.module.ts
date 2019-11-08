import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './angular-material/app.material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './services/user-services/User.service';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { IconComponent } from './component/icon/icon.component';
import { NotesComponent } from './component/notes/notes.component';
import { AuthGuard } from '../app/auth-guard/auth.guard';
import { AuthService } from '../app/services/auth/auth.service';
import { CardsComponent } from './component/cards/cards.component';
import { DisplayNotesComponent } from './component/display-notes/display-notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { DialogueComponent } from './component/dialogue/dialogue.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UploadImageComponent } from './component/upload-image/upload-image.component';
import { IconTrayComponent } from './component/icon-tray/icon-tray.component';
import { RemindMeComponent } from './component/remind-me/remind-me.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { ColorComponent } from './component/color/color.component';
import { AddImageComponent } from './component/add-image/add-image.component';
import { MoreComponent } from './component/more/more.component';
import { ArchiveIconComponent } from './component/archive-icon/archive-icon.component';
import { UnarchiveIconComponent } from './component/unarchive-icon/unarchive-icon.component';
import { TestpipePipe } from './pipe/testpipe.pipe';
import { SerachComponent } from './component/serach/serach.component';
import { LabelsComponent } from './component/labels/labels.component';
import { MatMenuModule } from '@angular/material/menu';
import { HttpModule } from '@angular/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { LabelDisplayComponent } from './component/label-display/label-display.component';
import { RemindersComponent } from './component/reminders/reminders.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { CollabComponent } from './component/collab/collab.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { QuesAnsComponent } from './component/ques-ans/ques-ans.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SelectRegComponent } from './component/select-reg/select-reg.component';
import { CartComponent } from './component/cart/cart.component';
import { BarRatingModule } from "ngx-bar-rating";
import { LikeComponent } from './component/like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
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
    IconTrayComponent,
    RemindMeComponent,
    CollaboratorComponent,
    ColorComponent,
    AddImageComponent,
    MoreComponent,
    ArchiveIconComponent,
    UnarchiveIconComponent,
    TestpipePipe,
    SerachComponent,
    LabelsComponent,
    LabelDisplayComponent,
    RemindersComponent,
    CollabComponent,
    QuesAnsComponent,
    SelectRegComponent,
    CartComponent,
    LikeComponent,

  ],
  entryComponents: [DialogueComponent, UploadImageComponent, LabelsComponent, CollabComponent],
  imports: [
    BarRatingModule,
    AngularEditorModule,
    OwlDateTimeModule, OwlNativeDateTimeModule ,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    Ng4LoadingSpinnerModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    ImageCropperModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    HttpModule,
    TextFieldModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    OwlDateTimeModule,
    MatDatepickerModule,
    TestService,
    AuthGuard,
    AuthService,  
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
{


}
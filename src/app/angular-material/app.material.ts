import { NgModule } from '@angular/core';
import {MatButtonModule,MatTabsModule,MatStepperModule,MatSnackBar,MatRadioModule,MatDialogModule,  MatTooltipModule,MatMenuModule,MatExpansionModule,MatListModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatSliderModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatTabsModule,
MatSliderModule,
MatCardModule,
MatIconModule,
MatToolbarModule,
MatSidenavModule,
MatSnackBarModule,
MatListModule,
MatSnackBarModule,
MatExpansionModule,
TextFieldModule,
MatMenuModule,
MatDialogModule,
MatTooltipModule,
MatRadioModule,
MatStepperModule
],

exports: [
MatButtonModule,
MatStepperModule,
MatRadioModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule,
MatIconModule,
MatToolbarModule,
MatSnackBarModule,
MatSidenavModule,
MatListModule,
MatTabsModule,
MatExpansionModule,
TextFieldModule,
MatMenuModule,
MatDialogModule,
MatTooltipModule
],
})
export class AppMaterialModule { }
import { NgModule } from '@angular/core';
import {MatButtonModule,MatDialogModule,MatMenuModule,MatExpansionModule,MatListModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatSliderModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';
@NgModule({
imports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule,
MatIconModule,
MatToolbarModule,
MatSidenavModule,
MatListModule,
MatExpansionModule,
TextFieldModule,
MatMenuModule,
MatDialogModule
],

exports: [
MatButtonModule,
MatFormFieldModule,
MatInputModule,
MatDividerModule,
MatSliderModule,
MatCardModule,
MatIconModule,
MatToolbarModule,
MatSidenavModule,
MatListModule,
MatExpansionModule,
TextFieldModule,
MatMenuModule,
MatDialogModule
],
})
export class AppMaterialModule { }
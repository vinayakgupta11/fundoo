import { NgModule } from '@angular/core';
import {MatButtonModule,MatRadioModule,MatDialogModule,  MatTooltipModule,MatMenuModule,MatExpansionModule,MatListModule,MatFormFieldModule,MatInputModule,MatDividerModule,MatSliderModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule} from '@angular/material';
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
MatDialogModule,
MatTooltipModule,
MatRadioModule
],

exports: [
MatButtonModule,
MatRadioModule,
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
MatDialogModule,
MatTooltipModule
],
})
export class AppMaterialModule { }
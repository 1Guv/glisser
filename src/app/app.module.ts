import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardPostComponent } from '../_elements/card-post.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { DialogEditNameComponent } from '../_dialogs/dialog-edit-name/dialog-edit-name.component';
import { DialogEditBioComponent } from 'src/_dialogs/dialog-edit-bio/dialog-edit-bio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardPostComponent,
    DialogEditNameComponent,
    DialogEditBioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogEditNameComponent,
    DialogEditBioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

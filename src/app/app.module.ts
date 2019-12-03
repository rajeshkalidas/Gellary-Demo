import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatIconModule, MatDialogModule} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {NewTitleDialogComponent} from './components/new-card/new-card.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {AppRoutingModule} from './app-routing.module';


import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
import { GalleryViewComponent } from './gallery-view/gallery-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NewTitleDialogComponent,
    GalleryComponent,
    GalleryDetailsComponent,
    GalleryViewComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule,MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
    AppRoutingModule
  ],
  entryComponents: [
    NewTitleDialogComponent,
    GalleryComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

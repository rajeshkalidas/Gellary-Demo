import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  templateUrl: './new-card.component.html'
})
export class NewTitleDialogComponent implements OnInit {
  galleryDialogRef: MatDialogRef<GalleryComponent>;

  form: FormGroup;
  selectedImageDetails: {};
  showImage:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private newDialogRef: MatDialogRef<NewTitleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    public galleryComponentMatDialog: MatDialog
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: this.data.title ? this.data.title : ''
    })
  }
  openGalleryDialog() {

    this.galleryDialogRef = this.galleryComponentMatDialog.open(GalleryComponent, {
      data: {
        //filename: file ? file.title : ''
      }
    });

    this.galleryDialogRef.afterClosed().subscribe(selectedGalleryData => {
      this.showImage = true;
     this.selectedImageDetails = selectedGalleryData
    });

  }

  submit(form) {
    const newCardInfo = {
      title: form.value.title,
      imageDetails: this.selectedImageDetails
    }
    this.newDialogRef.close(newCardInfo);
  }
}

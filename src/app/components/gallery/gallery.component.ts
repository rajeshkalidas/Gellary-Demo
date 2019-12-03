import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from 'src/app/gallery-service.service';
import { MatDialogRef } from '@angular/material';


interface GalleryImage {
  id: number;
  title: string;
};


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleryList:object = [];


  constructor(private service:GalleryServiceService,  private dialogRef: MatDialogRef<GalleryComponent>) {
    this.getGalleryInfo();
   }

  ngOnInit() {
   setInterval(() => this.getGalleryInfo(), 10000);

  }



  getGalleryInfo() {
    this.service.getGalleryJson().subscribe(data => {
      this.galleryList = data;
    })
  }

  onImageClickHandler(item) {
    console.log('item', item);
     this.dialogRef.close(item);

  }

}

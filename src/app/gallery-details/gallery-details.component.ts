import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {
  constructor(private route:Router) {
    console.log(this.route);
  }

  ngOnInit() {

  }

  navigateBack() {
    this.route.navigate(['/gallery-view'])
  }

}

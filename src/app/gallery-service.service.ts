import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryServiceService {

  constructor(private http:HttpClient) { }

  getGalleryJson() {
    return this.http.get<any>('http://localhost:3000/gallery')
  }
}

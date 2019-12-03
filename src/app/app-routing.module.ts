import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryViewComponent} from '../app/gallery-view/gallery-view.component';
import {GalleryDetailsComponent} from '../app/gallery-details/gallery-details.component';



const routes: Routes = [
  {path: "gallery-view", component: GalleryViewComponent},
  {path: "gallery-details/?cardInfo", component: GalleryDetailsComponent},
  { path: '',
    redirectTo: 'gallery-view',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

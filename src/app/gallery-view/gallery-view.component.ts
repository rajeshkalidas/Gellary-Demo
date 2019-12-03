import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {find, isEmpty, orderBy} from 'lodash';
import {NewTitleDialogComponent} from '../components/new-card/new-card.component';
import cards from '../../mock/cardList.json';

interface Card {
  id: number;
  title: string;
  thumbImage: string;
};

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.scss']
})


export class GalleryViewComponent implements OnInit {
  cardsList:Card[];
  sort: string = 'asc';
  sortIcon:string = 'arrow_downward';
  selectedCardId:number = 0;
  dialogRef: MatDialogRef<NewTitleDialogComponent>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.cardsList =  orderBy(cards, [item => item.title.toLowerCase()], this.sort)
  }

  openDialog(file?) {
    this.dialogRef = this.dialog.open(NewTitleDialogComponent, {
      data: {
        filename: file ? file.title : ''
      }
    });

    this.dialogRef.afterClosed().subscribe(newCardInfo => {

      if(!isEmpty(newCardInfo)) {
        const foundObject  = find(this.cardsList, (item) => item.title.toLowerCase() === newCardInfo.title.toLowerCase());
        if (!foundObject) {
          this.cardsList.push({
            id: this.cardsList.length + 1,
            title: newCardInfo.title,
            thumbImage: 'http://placekitten.com/120/120'
          })
          this.cardsList =  orderBy(this.cardsList, [item => item.title.toLowerCase()], this.sort)
        } else {
          alert("Title Already Exists")
        }



      }
    });
  }
  onSortClickHandler() {
    this.sort = this.sort === 'asc' ? 'desc' : 'asc';
    this.sortIcon = this.sort === 'desc' ? 'arrow_upward' : 'arrow_downward'
    this.cardsList =  orderBy(this.cardsList, [item => item.title.toLowerCase()], this.sort)
  }

  onCardDeleteHandler(id) {
    this.cardsList = this.cardsList.filter(item => item.id !== id);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardsList, event.previousIndex, event.currentIndex);
  }
}


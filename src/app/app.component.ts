import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {find, isEmpty, orderBy} from 'lodash';
import {NewTitleDialogComponent} from './components/new-card/new-card.component';
import cards from '../mock/cardList.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(public dialog: MatDialog) {}



}

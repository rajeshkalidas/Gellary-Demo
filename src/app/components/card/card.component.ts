import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardInfo:object
  @Output() onClickDeleteHandler:EventEmitter<any> = new EventEmitter();

  constructor(private route:Router) {

  }

  ClickOnDelete(id){
     this.onClickDeleteHandler.emit(id);
  }

  onCardClickHandler() {
    this.route.navigate(['gallery-details/?cardInfo',  {queryParams: { cardInfo: 'sample Data'}}])
  }


}

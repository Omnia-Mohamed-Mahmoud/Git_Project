import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../_modules/client';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() cli = new Client(0,"null","null");

  @Output() onhide:EventEmitter<boolean>=new EventEmitter<boolean>();
  hide(){
    this.onhide.emit(false);
  }
}

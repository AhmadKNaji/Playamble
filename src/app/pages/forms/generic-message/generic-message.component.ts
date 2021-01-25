import { Component, OnInit } from '@angular/core';
import { DctService } from '../services/dct.service';

@Component({
  selector: 'ngx-generic-message',
  templateUrl: './generic-message.component.html',
  styleUrls: ['./generic-message.component.scss']
})
export class GenericMessageComponent implements OnInit {

  msg: string;

  constructor(private dct: DctService) { }

  msgChange(event){
    this.dct.message = event;
  }

  ngOnInit(): void {
  }

}

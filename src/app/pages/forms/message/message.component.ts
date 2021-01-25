import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { DctService } from '../services/dct.service';
import { MessageService } from './message-service.service';

@Component({
  selector: 'ngx-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  form: FormGroup;
  constructor(
    private validation: MessageService,
    private dct: DctService
  ) {}
  ngOnInit(): void {

      this.form = new FormGroup({
        array: new FormArray([
          new FormGroup({
            message: new FormControl(null),
            ref: new FormControl(null)
          }),
        ]),
      });
    
    // (this.form.controls.array as FormArray).push(
    //   new FormGroup({ question: new FormControl("Hi") })
    // );
  }

  log(i) {
    // console.log(i);
  }

  addToArray() {
    const data = new FormGroup({
      message: new FormControl(null),
      ref: new FormControl(null)
    });
    (this.form.controls.array as FormArray).push(data);
    this.validation.increment();
  }
  deleteFromArray(i) {
    if (this.array.length === 1) {
      alert("Can't delete only message");
    } else {
      this.validation.removeAt(i);
      (this.form.controls.array as FormArray).removeAt(i);
    }
  }

  onKey(event, i) {
    this.validation.setValidation(event.target.value, i);
  }

  onRef(event,i){
    this.validation.setReference(event.target.value, i);
  }

  get array() {
    return this.form.controls.array as FormArray;
  }

}

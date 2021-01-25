import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private validation: Array<string> = new Array();
  protected validationIndex = 0;
  private ref: Array<string> = new Array();
  protected refIndex = 0;
  constructor() { }

  public setValidation(inp, i) {
    this.validation[i] = inp;
  }

  public setReference(inp,i){
    this.ref[i] = inp;
  }

  public increment() {
    this.validationIndex++;
    this.refIndex++;
  }

  public removeAt(i) {
    this.validation.splice(i, 1);
    this.validationIndex--;
    this.ref.splice(i, 1);
    this.refIndex--;
  }

  public getValidation() {
    return this.validation;
  }

  public getReference(){
    return this.ref;
  }
}

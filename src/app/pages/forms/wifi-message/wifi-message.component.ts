import { Component, OnInit } from '@angular/core';
import { DctService } from '../services/dct.service';

@Component({
  selector: 'ngx-wifi-message',
  templateUrl: './wifi-message.component.html',
  styleUrls: ['./wifi-message.component.scss']
})
export class WifiMessageComponent {

  showPassword = false;
  ssid: string;
  password: string;

  constructor(private dct: DctService){}

  changeSsid(event){
    // console.log(event);
    this.dct.ssid = event;
  }

  changePassword(event){
    // console.log(event);
    this.dct.password = event;
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}

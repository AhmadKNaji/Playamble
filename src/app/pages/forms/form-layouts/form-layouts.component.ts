import { AfterViewInit, Component, OnInit } from "@angular/core";
// import { GetCardByNameService } from './card-selector/get-card-by-name.service';
import { Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { MessageService } from "../message/message-service.service";
import { DctService } from "../services/dct.service";
// import { CardEditService } from './card-creator/services/card-edit.service';

@Component({
  selector: "ngx-form-layouts",
  styleUrls: ["./form-layouts.component.scss"],
  templateUrl: "./form-layouts.component.html",
})
export class FormLayoutsComponent implements AfterViewInit {
  selected: string;
  status: boolean = false;
  btnStatus: string;

  ngAfterViewInit() {
    // console.log(this.status);

    if (this.status == true) this.btnStatus = "on";
    else this.btnStatus = "off";
  }

  constructor(
    private dct: DctService,
    private msgService: MessageService,
    private toastr: NbToastrService
  ) {}

  change(event) {
    this.status = event;
    // console.log(event);
    this.ngAfterViewInit();
    // console.log(this.status);
  }

  validate() {
    // console.log(this.selected);
    // console.log(this.status);

    if (this.selected == "wifi-access-less-than-24hrs") {
      let json = {
        dialog: this.selected,
        message: [
          { status: this.status },
          {
            ssid: this.dct.ssid,
            password: this.dct.password,
          },
        ],
      };
      console.log(json);
      this.dct
        .post(json)
        .then(() => {
          this.toastr.success("Insertion Successful", "Insert Message");
        })
        .catch(() => {
          this.toastr.danger("Insertion Failure", "Insert Message");
        });
    } else if (this.selected == "generic-message") {
      let json = {
        dialog: this.selected,
        message: [{ status: this.status }, { msg: this.dct.message }],
      };
      console.log(json);
      this.dct
        .post(json)
        .then(() => {
          this.toastr.success("Insertion Successful", "Insert Message");
        })
        .catch(() => {
          this.toastr.danger("Insertion Failure", "Insert Message");
        });
    } else {
      let json = {
        dialog: this.selected,
        message: [
          { status: this.status },
          {
            quest: this.msgService.getValidation(),
            ref: this.msgService.getReference(),
          },
        ],
      };

      console.log(json);
      this.dct
        .post(json)
        .then(() => {
          this.toastr.success("Insertion Successful", "Insert Message");
        })
        .catch(() => {
          this.toastr.danger("Insertion Failure", "Insert Message");
        });
    }
  }
}

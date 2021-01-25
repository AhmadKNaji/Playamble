import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbListModule,
  NbToggleModule
} from '@nebular/theme';
import { ClipboardModule } from 'ngx-clipboard';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import {
  FormsModule as ngFormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MessageComponent } from './message/message.component';
import { WifiMessageComponent } from './wifi-message/wifi-message.component';
import { GenericMessageComponent } from './generic-message/generic-message.component';

@NgModule({
  imports: [
    ClipboardModule,
    NbListModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NbToggleModule
  ],
  declarations: [
    FormsComponent,
    FormLayoutsComponent,
    MessageComponent,
    WifiMessageComponent,
    GenericMessageComponent,
  ],
})
export class FormsModule { }

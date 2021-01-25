import { NgModule } from '@angular/core';
import { NbMenuModule, NbSidebarModule, NbLayoutModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  FormsModule as ngFormsModule,
} from '@angular/forms';
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
} from '@nebular/theme';
import { MessagesComponent } from './reporting/messages/messages.component';
import { ChatbotSuccessRateComponent } from './reporting/chatbot-success-rate/chatbot-success-rate.component';
import { GraphsComponent } from './reporting/graphs/graphs.component';
import { BarComponent } from './reporting/graphs/bar/bar.component';
import { PieComponent } from './reporting/graphs/pie/pie.component';
import { LineComponent } from './reporting/graphs/line/line.component';

@NgModule({
  imports: [

    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    ngFormsModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbSidebarModule,
    NbLayoutModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
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
  ],
  declarations: [
    PagesComponent,
    MessagesComponent,
    ChatbotSuccessRateComponent,
    GraphsComponent,
    BarComponent,
    PieComponent,
    LineComponent,
  ],
})
export class PagesModule { }

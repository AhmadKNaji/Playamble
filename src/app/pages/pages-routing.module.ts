import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { MessagesComponent } from './reporting/messages/messages.component';
import { ChatbotSuccessRateComponent } from './reporting/chatbot-success-rate/chatbot-success-rate.component';
import { FormLayoutsComponent } from './forms/form-layouts/form-layouts.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'forms/form-layouts',
      component: FormLayoutsComponent,
    },
    {
      path: 'reporting/messages',
      component: MessagesComponent,
    },
    {
      path: 'reporting/chatbot-success-rate',
      component: ChatbotSuccessRateComponent,
    },

    {
      path: 'reporting/messages',
      component: MessagesComponent,
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

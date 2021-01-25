import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  template: `
  <nb-card>
    <div class="icon-container">
      <div class="icon status-{{ type }}">
        <ng-content></ng-content>
      </div>
    </div>
    <div class="details">
      <div class="title h6">{{ title }}</div>
      <div class="status paragraph-30">{{ text }}</div>
    </div>
  </nb-card>
`,
  styleUrls: ['./status-card.component.scss'],
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() text: string;

}

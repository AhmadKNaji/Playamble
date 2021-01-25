import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFluxComponent } from './message-flux.component';

describe('MessageFluxComponent', () => {
  let component: MessageFluxComponent;
  let fixture: ComponentFixture<MessageFluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFluxComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

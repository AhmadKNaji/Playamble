import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotSuccessRateComponent } from './chatbot-success-rate.component';

describe('ChatbotSuccessRateComponent', () => {
  let component: ChatbotSuccessRateComponent;
  let fixture: ComponentFixture<ChatbotSuccessRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatbotSuccessRateComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotSuccessRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

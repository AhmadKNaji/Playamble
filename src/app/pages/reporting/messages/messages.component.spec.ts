import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { messagesComponent } from './messages.component';

describe('messagesComponent', () => {
  let component: messagesComponent;
  let fixture: ComponentFixture<messagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [messagesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(messagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

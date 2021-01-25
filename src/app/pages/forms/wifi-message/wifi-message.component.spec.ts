import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiMessageComponent } from './wifi-message.component';

describe('WifiMessageComponent', () => {
  let component: WifiMessageComponent;
  let fixture: ComponentFixture<WifiMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

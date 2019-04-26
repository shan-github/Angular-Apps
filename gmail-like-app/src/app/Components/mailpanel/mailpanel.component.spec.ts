import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailpanelComponent } from './mailpanel.component';

describe('MailpanelComponent', () => {
  let component: MailpanelComponent;
  let fixture: ComponentFixture<MailpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
